import { useState } from "react";
import { addToWaitlist } from "../lib/waitlist";

export default function WaitlistForm({ variant = "hero", onSuccess }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    const count = addToWaitlist(email);
    setSubmitted(true);
    setError("");
    onSuccess?.(count);
  };

  if (submitted) {
    return (
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "14px 20px", borderRadius: 14,
        background: variant === "hero" ? "rgba(16,185,129,0.1)" : "rgba(16,185,129,0.08)",
        border: "1px solid rgba(16,185,129,0.2)",
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#10B981" />
          <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: 14, fontWeight: 500, color: "#10B981" }}>
          You're on the list. We'll notify you at launch.
        </span>
      </div>
    );
  }

  const isHero = variant === "hero";
  return (
    <div>
      <div style={{
        display: "flex", gap: 8,
        flexDirection: isHero ? "row" : "row",
      }}>
        <div style={{ flex: 1, position: "relative" }}>
          <input
            type="email"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(""); }}
            onKeyDown={e => e.key === "Enter" && handleSubmit()}
            placeholder="Enter your email"
            style={{
              width: "100%", padding: "14px 18px",
              fontSize: 15, fontFamily: "'Outfit', sans-serif",
              borderRadius: 12, border: `1.5px solid ${error ? "#F43F5E" : "rgba(255,255,255,0.12)"}`,
              background: isHero ? "rgba(255,255,255,0.06)" : "rgba(28,25,23,0.04)",
              color: isHero ? "#fff" : "#1C1917",
              outline: "none",
              transition: "border 0.2s, box-shadow 0.2s",
              boxSizing: "border-box",
            }}
            onFocus={e => e.target.style.borderColor = "#E11D48"}
            onBlur={e => e.target.style.borderColor = error ? "#F43F5E" : "rgba(255,255,255,0.12)"}
          />
        </div>
        <button
          onClick={handleSubmit}
          style={{
            padding: "14px 28px", borderRadius: 12, border: "none",
            background: "linear-gradient(135deg, #E11D48, #F43F5E)",
            color: "#fff", fontSize: 15, fontWeight: 600,
            fontFamily: "'Outfit', sans-serif", cursor: "pointer",
            whiteSpace: "nowrap", flexShrink: 0,
            boxShadow: "0 4px 20px rgba(225,29,72,0.3)",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 6px 28px rgba(225,29,72,0.4)"; }}
          onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 4px 20px rgba(225,29,72,0.3)"; }}
        >
          Join Waitlist
        </button>
      </div>
      {error && <div style={{ fontSize: 12, color: "#F43F5E", marginTop: 6, marginLeft: 4 }}>{error}</div>}
    </div>
  );
}
