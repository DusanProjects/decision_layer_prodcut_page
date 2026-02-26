import Reveal from "../components/Reveal";
import AnimatedNumber from "../components/AnimatedNumber";

export default function PainPointSection() {
  return (
    <section style={{
      padding: "120px 40px",
      background: "#FAFAF9",
      position: "relative",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <div style={{
            fontSize: 12, fontWeight: 700, color: "#E11D48",
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16,
            textAlign: "center",
          }}>
            The problem
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            textAlign: "center", lineHeight: 1.15, letterSpacing: "-0.03em",
            marginBottom: 20, color: "#1C1917",
          }}>
            You don't have a shopping problem.
            <br />
            You have a <span style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 500 }}>deciding</span> problem.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{
            fontSize: 17, color: "#78716C", textAlign: "center",
            maxWidth: 560, margin: "0 auto 60px", lineHeight: 1.7,
          }}>
            You already found what you want. You found twelve of them.
            And now you're stuck.
          </p>
        </Reveal>

        {/* Stats strip */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          marginBottom: 80,
        }}>
          {[
            { stat: "70", unit: "%", label: "of carts are abandoned", sub: "Most because of indecision, not price" },
            { stat: "23", unit: "tabs", label: "open on average", sub: "While comparing the same 3 jackets" },
            { stat: "40", unit: "%", label: "of online purchases returned", sub: "Because buyers weren't sure" },
          ].map((item, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div style={{
                padding: 32, borderRadius: 20,
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                textAlign: "center",
              }}>
                <div style={{
                  fontSize: 52, fontWeight: 800, color: "#1C1917",
                  letterSpacing: "-0.04em", lineHeight: 1,
                  marginBottom: 4,
                }}>
                  <AnimatedNumber target={parseInt(item.stat)} />
                  <span style={{ fontSize: 28, fontWeight: 600, color: "#A8A29E" }}>{item.unit}</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#44403C", marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: "#A8A29E" }}>{item.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Emotional quotes marquee */}
        <div style={{
          overflow: "hidden", padding: "20px 0",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}>
          <div style={{
            display: "flex", gap: 40,
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}>
            {[
              "I've been staring at these two jackets for 3 days",
              "Just bought both, I'll return one... probably",
              "Closed all 47 tabs and bought nothing",
              "Added to cart in January. It's March. Still deciding.",
              "My wishlist has more items than a warehouse",
              "I literally made a spreadsheet to compare sneakers",
              "I've been staring at these two jackets for 3 days",
              "Just bought both, I'll return one... probably",
              "Closed all 47 tabs and bought nothing",
              "Added to cart in January. It's March. Still deciding.",
              "My wishlist has more items than a warehouse",
              "I literally made a spreadsheet to compare sneakers",
            ].map((q, i) => (
              <span key={i} style={{
                fontSize: 15,
                fontFamily: "'Newsreader', serif", fontStyle: "italic",
                color: "#A8A29E", whiteSpace: "nowrap",
              }}>
                "{q}"
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
