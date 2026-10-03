"use client";

import { useEffect } from "react";

// Loads Bootstrap's JS (navbar collapse, dropdowns) from the npm package
// instead of cdn.jsdelivr.net, so no visitor IP is sent to a third-party CDN.
export default function BootstrapJs() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}
