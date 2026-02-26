export default function NavBar({ scrollY }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "0 40px", height: 64,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrollY > 50 ? "rgba(250,250,249,0.85)" : "transparent",
      backdropFilter: scrollY > 50 ? "blur(20px) saturate(180%)" : "none",
      borderBottom: scrollY > 50 ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 30, height: 30, borderRadius: 9,
          background: "linear-gradient(135deg, #E11D48, #F43F5E)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8L7 12L13 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span style={{ fontSize: 17, fontWeight: 700, color: "#1C1917", letterSpacing: "-0.03em" }}>
          Decision Layer
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <a href="#how-it-works" style={{ fontSize: 14, color: "#78716C", textDecoration: "none", fontWeight: 500 }}>How it works</a>
        <a href="#why" style={{ fontSize: 14, color: "#78716C", textDecoration: "none", fontWeight: 500 }}>Why</a>
        <a href="#waitlist" style={{
          fontSize: 13, fontWeight: 600, color: "#fff",
          background: "#1C1917", padding: "8px 18px", borderRadius: 10,
          textDecoration: "none",
        }}>
          Get Early Access
        </a>
      </div>
    </nav>
  );
}
