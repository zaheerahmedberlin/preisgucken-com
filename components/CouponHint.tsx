// "Gutscheine mit Rabatten bis zu X %": X is read from the live coupon feed of
// preisgucken.de, so the claim is always backed by real, active coupons.
// Server component: the page is regenerated at most hourly (ISR). If the feed
// is unreachable or has no percentage coupons, nothing is rendered rather than
// a number that might be wrong.

const API = process.env.PRODUCTS_API_URL ?? "https://www.preisgucken.de";

type Coupon = { title?: string; description?: string; discount_type?: string; discount_value?: number | string | null };

async function maxPercentCoupon(): Promise<number | null> {
  try {
    const res = await fetch(`${API}/api/coupons`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const coupons: Coupon[] = await res.json();
    let max = 0;
    for (const c of coupons) {
      const fromValue = String(c.discount_type ?? "").toLowerCase().includes("percent") ? Number(c.discount_value) : NaN;
      if (Number.isFinite(fromValue) && fromValue > max && fromValue <= 90) max = fromValue;
      for (const m of `${c.title ?? ""} ${c.description ?? ""}`.matchAll(/(\d{1,2})\s?%/g)) {
        const v = Number(m[1]);
        if (v > max && v <= 90) max = v;
      }
    }
    return max > 0 ? Math.round(max) : null;
  } catch {
    return null;
  }
}

export default async function CouponHint() {
  const max = await maxPercentCoupon();
  if (!max) return null;
  return (
    <p className="small text-muted">
      Aktuell gibt es bei unseren Partner-Shops{" "}
      <a href="https://www.preisgucken.de/gutscheine" target="_blank" rel="noopener">
        Gutscheine mit Rabatten von bis zu {max} %
      </a>{" "}
      (teils mit Mindestbestellwert oder nur auf ausgewählte Artikel; Konditionen und Laufzeiten ändern sich laufend).
    </p>
  );
}
