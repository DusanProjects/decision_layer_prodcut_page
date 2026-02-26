import Reveal from "../components/Reveal";
import InteractiveDemo from "../components/InteractiveDemo";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" style={{
      padding: "120px 40px",
      background: "#fff",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <div style={{
            fontSize: 12, fontWeight: 700, color: "#E11D48",
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16,
            textAlign: "center",
          }}>
            How it works
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            textAlign: "center", lineHeight: 1.15, letterSpacing: "-0.03em",
            marginBottom: 64, color: "#1C1917",
          }}>
            Three clicks to clarity
          </h2>
        </Reveal>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 80 }}>
          {[
            {
              num: "01", title: "Add anything",
              desc: "Browse normally. See something you like? One click adds it to your Decision Board. Works on any online store.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" />
                </svg>
              ),
            },
            {
              num: "02", title: "Compare pairs",
              desc: "Launch Decision Mode. We show you two items at a time. Pick the one you prefer. That's it. No spreadsheets, no lists, no thinking.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><path d="M10 17h4M12 14v6" />
                </svg>
              ),
            },
            {
              num: "03", title: "Know your pick",
              desc: "After a few quick rounds, your preference is crystal clear. Buy with confidence. No second-guessing. No returns.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                </svg>
              ),
            },
          ].map((step, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div style={{
                padding: 32, borderRadius: 20,
                background: "#FAFAF9",
                border: "1px solid rgba(0,0,0,0.04)",
                height: "100%",
              }}>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginBottom: 20,
                }}>
                  {step.icon}
                  <span style={{
                    fontSize: 48, fontWeight: 800, color: "rgba(0,0,0,0.04)",
                    lineHeight: 1, letterSpacing: "-0.04em",
                  }}>{step.num}</span>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#1C1917", marginBottom: 10 }}>{step.title}</div>
                <div style={{ fontSize: 14, color: "#78716C", lineHeight: 1.7 }}>{step.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive Demo */}
        <Reveal>
          <div style={{
            padding: "48px 32px", borderRadius: 24,
            background: "#FAFAF9", border: "1px solid rgba(0,0,0,0.06)",
          }}>
            <InteractiveDemo />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
