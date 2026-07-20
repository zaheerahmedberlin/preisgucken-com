"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push("/admin/tiktok");
    } else {
      setError("Falsches Passwort.");
      setLoading(false);
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <div className="card p-5 shadow" style={{ width: 360 }}>
        <div className="text-center mb-4">
          <div style={{ fontSize: 40 }}>🔐</div>
          <h2 className="h5 fw-bold mt-2">Admin-Bereich</h2>
          <p className="text-muted small">Nur für internen Gebrauch</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="password"
              className={`form-control form-control-lg ${error ? "is-invalid" : ""}`}
              placeholder="Passwort"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoFocus
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>
          <button className="btn btn-brand w-100 btn-lg" type="submit" disabled={loading}>
            {loading ? "..." : "Anmelden"}
          </button>
        </form>
      </div>
    </div>
  );
}
