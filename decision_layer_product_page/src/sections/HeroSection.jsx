import Reveal from "../components/Reveal";
import WaitlistForm from "../components/WaitlistForm";

export default function HeroSection({ waitlistCount, handleWaitlistSuccess }) {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center",
      padding: "120px 40px 80px",
      position: "relative", overflow: "hidden",
      background: "#0C0A09",
    }}>
      {/* Subtle grain overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px",
        animation: "grain 8s steps(10) infinite",
      }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translate(-50%,-50%)",
        width: 800, height: 800, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(225,29,72,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Pre-headline badge */}
      <Reveal delay={0}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "6px 6px 6px 16px", borderRadius: 30,
          background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
          marginBottom: 32,
        }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
            Chrome Extension · Coming Soon
          </span>
          <span style={{
            fontSize: 11, fontWeight: 700, color: "#E11D48",
            background: "rgba(225,29,72,0.12)", padding: "4px 12px", borderRadius: 20,
          }}>
            Join {waitlistCount.toLocaleString()}+ others
          </span>
        </div>
      </Reveal>

      {/* Main headline */}
      <Reveal delay={0.1}>
        <h1 style={{
          fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800,
          textAlign: "center", lineHeight: 1.05, letterSpacing: "-0.04em",
          maxWidth: 800, marginBottom: 24,
          color: "#FAFAF9",
        }}>
          Stop overthinking.
          <br />
          <span style={{
            background: "linear-gradient(135deg, #E11D48, #FB7185)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Start choosing.
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p style={{
          fontSize: "clamp(16px, 1.8vw, 20px)", color: "rgba(255,255,255,0.5)",
          textAlign: "center", maxWidth: 540, lineHeight: 1.6,
          marginBottom: 40, fontWeight: 400,
        }}>
          A tiny browser extension that turns your overstuffed shopping cart into a
          clear, confident decision — in seconds, not hours.
        </p>
      </Reveal>

      {/* Waitlist form */}
      <Reveal delay={0.3}>
        <div style={{ width: "100%", maxWidth: 480, marginBottom: 20 }}>
          <WaitlistForm variant="hero" onSuccess={handleWaitlistSuccess} />
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div style={{
          display: "flex", alignItems: "center", gap: 16,
          fontSize: 12, color: "rgba(255,255,255,0.3)",
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            No data leaves your browser
          </span>
          <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.1)" }} />
          <span>Free forever</span>
          <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.1)" }} />
          <span>Open source</span>
        </div>
      </Reveal>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        animation: "float 3s ease-in-out infinite",
      }}>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", fontWeight: 500 }}>SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
      </div>
    </section>
  );
}
