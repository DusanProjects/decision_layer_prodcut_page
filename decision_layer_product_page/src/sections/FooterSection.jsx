export default function FooterSection() {
  return (
    <footer style={{
      padding: "32px 40px",
      background: "#0C0A09",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 22, height: 22, borderRadius: 6,
          background: "linear-gradient(135deg, #E11D48, #F43F5E)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
            <path d="M3 8L7 12L13 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>Decision Layer</span>
      </div>
      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
        © 2026 · Built to help you decide
      </span>
    </footer>
  );
}
