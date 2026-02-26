import Reveal from "../components/Reveal";
import WaitlistForm from "../components/WaitlistForm";

export default function FinalCtaSection({ waitlistCount, handleWaitlistSuccess }) {
  return (
    <section id="waitlist" style={{
      padding: "120px 40px",
      background: "#0C0A09",
      position: "relative", overflow: "hidden",
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute", bottom: -200, left: "50%", transform: "translateX(-50%)",
        width: 800, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(225,29,72,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Reveal>
          <h2 style={{
            fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800,
            lineHeight: 1.1, letterSpacing: "-0.04em",
            marginBottom: 16, color: "#FAFAF9",
          }}>
            Ready to stop
            <br />
            second-guessing?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{
            fontSize: 17, color: "rgba(255,255,255,0.4)",
            marginBottom: 36, lineHeight: 1.6,
          }}>
            Join the waitlist. Be the first to try Decision Layer
            when we launch.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <WaitlistForm variant="hero" onSuccess={handleWaitlistSuccess} />
        </Reveal>

        <Reveal delay={0.3}>
          <div style={{
            marginTop: 32, display: "flex", alignItems: "center",
            justifyContent: "center", gap: 24,
          }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Stacked avatars */}
              {[0, 1, 2, 3].map(i => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: "50%",
                  border: "2px solid #0C0A09",
                  background: ["#E11D48", "#F59E0B", "#3B82F6", "#10B981"][i],
                  marginLeft: i === 0 ? 0 : -10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12,
                }}>
                  {["🧑", "👩", "🧔", "👱"][i]}
                </div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
              <strong style={{ color: "rgba(255,255,255,0.6)" }}>{waitlistCount.toLocaleString()}</strong> people waiting
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
