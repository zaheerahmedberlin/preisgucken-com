export default function Blog() {
  const posts = [
    {
      slug: "#",
      title: "Die 10 besten Schnäppchen-Tipps für 2026",
      excerpt: "Wie du nie wieder zu viel bezahlst – mit diesen einfachen Tricks sparst du hunderte Euro pro Jahr.",
      category: "Spartipps",
      date: "19. Juli 2026",
    },
    {
      slug: "#",
      title: "Boxspringbett kaufen: Worauf du achten musst",
      excerpt: "Preis, Qualität, Größe – wir erklären, welche Parameter wirklich wichtig sind und wo die Fallen lauern.",
      category: "Kaufberatung",
      date: "18. Juli 2026",
    },
    {
      slug: "#",
      title: "Warum Preisvergleich beim Online-Shopping Pflicht ist",
      excerpt: "Gleiche Produkte, verschiedene Preise – manchmal bis zu 40% Unterschied. So nutzt du Preisvergleich richtig.",
      category: "Ratgeber",
      date: "15. Juli 2026",
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">📝 Blog</h1>
        <p className="text-muted">Kaufberatung, Spartipps und Preisvergleich-News</p>
      </div>

      <div className="row g-4">
        {posts.map((post, i) => (
          <div className="col-md-4" key={i}>
            <div className="card h-100 p-4">
              <span className="tag mb-2">{post.category}</span>
              <h3 className="h5 fw-bold mt-2">{post.title}</h3>
              <p className="text-muted small">{post.excerpt}</p>
              <div className="d-flex justify-content-between align-items-center mt-auto pt-3">
                <small className="text-muted">{post.date}</small>
                <a href={post.slug} className="btn btn-outline-secondary btn-sm">Lesen →</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5 p-5 card">
        <h4 className="fw-bold">✍️ Mehr Artikel folgen bald</h4>
        <p className="text-muted">Wir arbeiten an weiteren Ratgebern und Kaufberatungen.</p>
      </div>
    </div>
  );
}
