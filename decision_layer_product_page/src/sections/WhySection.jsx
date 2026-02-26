import Reveal from "../components/Reveal";

export default function WhySection() {
  return (
    <section id="why" style={{
      padding: "120px 40px",
      background: "#0C0A09", color: "#FAFAF9",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background elements */}
      <div style={{
        position: "absolute", top: -200, right: -200, width: 600, height: 600,
        borderRadius: "50%", border: "1px solid rgba(225,29,72,0.06)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -100, left: -100, width: 400, height: 400,
        borderRadius: "50%", border: "1px solid rgba(255,255,255,0.03)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}>
        <Reveal>
          <div style={{
            fontSize: 12, fontWeight: 700, color: "#E11D48",
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16,
            textAlign: "center",
          }}>
            Why Decision Layer
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            textAlign: "center", lineHeight: 1.15, letterSpacing: "-0.03em",
            marginBottom: 20,
          }}>
            Not another coupon tool.
            <br />
            A <span style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 500 }}>clarity</span> tool.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{
            fontSize: 17, color: "rgba(255,255,255,0.45)", textAlign: "center",
            maxWidth: 500, margin: "0 auto 64px", lineHeight: 1.7,
          }}>
            We don't save you money. We save you from the worst feeling in
            shopping — wondering if you made the right choice.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {[
            { title: "Not a price tool", desc: "We never tell you what's cheaper. Your preferences matter more than the price tag.", icon: "💰" },
            { title: "Not a guilt trip", desc: "We never say \"buy less.\" Add everything. We help you find what you actually want.", icon: "🚫" },
            { title: "Your data stays yours", desc: "Everything runs locally in your browser. No accounts. No tracking. No servers.", icon: "🔒" },
            { title: "Know yourself better", desc: "Over time, discover your real preferences. Color patterns. Price comfort zones. Brand loyalty.", icon: "🧠" },
            { title: "Works everywhere", desc: "Any online store. Zara, Amazon, ASOS, H&M — add from any site, compare across all of them.", icon: "🌐" },
            { title: "8 seconds to decide", desc: "Average decision time. Two or three quick rounds. That's all it takes to go from confused to confident.", icon: "⚡" },
          ].map((item, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div style={{
                padding: 28, borderRadius: 18,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex", gap: 16, alignItems: "flex-start",
              }}>
                <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
