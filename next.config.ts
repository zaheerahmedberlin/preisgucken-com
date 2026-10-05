import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Canonical host is www. The bare apex used to serve 200 and rely on the
  // canonical tag alone; send it a permanent redirect instead (matches .de).
  async redirects() {
    return [
      // Browsers and crawlers request /favicon.ico by default; the site only
      // declares /favicon.png, so Search Console reported a 404.
      { source: "/favicon.ico", destination: "/favicon.png", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "preisgucken.com" }],
        destination: "https://www.preisgucken.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
