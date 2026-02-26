import Reveal from "../components/Reveal";

export default function FutureVisionSection() {
  return (
    <section style={{ padding: "100px 40px", background: "#fff" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Reveal>
          <div style={{
            fontSize: 12, fontWeight: 700, color: "#E11D48",
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16,
            textAlign: "center",
          }}>
            The bigger picture
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{
            fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800,
            textAlign: "center", lineHeight: 1.2, letterSpacing: "-0.03em",
            marginBottom: 48,
          }}>
            Shopping is just the beginning
          </h2>
        </Reveal>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "Shopping", active: true },
            { label: "Apartments", active: false },
            { label: "Travel", active: false },
            { label: "Careers", active: false },
            { label: "Life decisions", active: false },
          ].map((item, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div style={{
                padding: "12px 24px", borderRadius: 40,
                background: item.active ? "#1C1917" : "#F5F5F4",
                color: item.active ? "#fff" : "#A8A29E",
                fontSize: 14, fontWeight: 600,
                border: item.active ? "none" : "1px solid rgba(0,0,0,0.06)",
                position: "relative",
              }}>
                {item.label}
                {!item.active && (
                  <span style={{
                    position: "absolute", top: -6, right: -6,
                    fontSize: 8, fontWeight: 700, color: "#fff",
                    background: "#A8A29E", padding: "2px 6px", borderRadius: 8,
                  }}>SOON</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p style={{
            fontSize: 15, color: "#78716C", textAlign: "center",
            maxWidth: 480, margin: "32px auto 0", lineHeight: 1.7,
          }}>
            The same structured comparison framework that helps you pick a jacket
            can help you pick an apartment, a vacation, or your next career move.
            We're starting with shopping because it's where you feel it every day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
