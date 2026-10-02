import RelatedOffers from "@/components/RelatedOffers";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedOffers />
    </>
  );
}
