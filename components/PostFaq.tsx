"use client";

import { usePathname } from "next/navigation";
import { BLOG_FAQS } from "@/lib/blogFaqs";

// Visible FAQ + matching FAQPage JSON-LD for posts listed in lib/blogFaqs.ts.
// Rendered from app/blog/layout.tsx; renders nothing for other pages.
export default function PostFaq() {
  const pathname = usePathname() ?? "";
  const slug = pathname.match(/^\/blog\/([^/]+)\/?$/)?.[1];
  const faqs = slug ? BLOG_FAQS[slug] : undefined;
  if (!faqs?.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="container pb-4" style={{ maxWidth: 820 }} aria-label="Häufige Fragen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 className="fw-bold h4 mb-3">Häufige Fragen</h2>
      {faqs.map((f) => (
        <div key={f.q} className="mb-3">
          <h3 className="h6 fw-bold mb-1">{f.q}</h3>
          <p className="mb-0">{f.a}</p>
        </div>
      ))}
    </section>
  );
}
