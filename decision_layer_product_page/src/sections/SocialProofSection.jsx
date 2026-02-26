import Reveal from "../components/Reveal";

export default function SocialProofSection() {
  return (
    <section style={{ padding: "100px 40px", background: "#FAFAF9" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <div style={{
            fontSize: 64, marginBottom: 24, lineHeight: 1,
            filter: "grayscale(1) brightness(0.9)",
          }}>
            🛋️
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote style={{
            fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500,
            fontFamily: "'Newsreader', serif", fontStyle: "italic",
            color: "#1C1917", lineHeight: 1.5,
            marginBottom: 20, letterSpacing: "-0.01em",
          }}>
            "I spent 4 hours comparing two almost identical couches.
            Four hours I'll never get back. And I'm still not sure I picked right."
          </blockquote>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ fontSize: 14, color: "#A8A29E", fontWeight: 500 }}>
            — Everyone who shops online, at some point
          </p>
        </Reveal>
      </div>
    </section>
  );
}
