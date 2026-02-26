import { useState, useEffect } from "react";
import MockProductCard from "./MockProductCard";

export default function InteractiveDemo() {
  const [step, setStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const products = [
    { title: "Wool Overcoat", price: 149, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop" },
    { title: "Puffer Jacket", price: 89, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop" },
    { title: "Trench Coat", price: 199, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop" },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const steps = [
    { label: "Your cart has 3 coats", desc: "You like all of them. But which one do you actually want?" },
    { label: "Round 1: Which do you prefer?", desc: "Just go with your gut. No overthinking." },
    { label: "Round 2: Final matchup", desc: "One more choice. That's it." },
    { label: "Done. Clear winner.", desc: "You chose in 8 seconds. No regret." },
  ];

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Step indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, justifyContent: "center" }}>
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            style={{
              width: i === step ? 40 : 8, height: 8, borderRadius: 4,
              background: i === step ? "#E11D48" : "rgba(28,25,23,0.12)",
              border: "none", cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Caption */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{
          fontSize: 18, fontWeight: 700, color: "#1C1917", marginBottom: 4,
          fontFamily: "'Outfit', sans-serif",
        }}>
          {steps[step].label}
        </div>
        <div style={{ fontSize: 14, color: "#78716C" }}>{steps[step].desc}</div>
      </div>

      {/* Cards */}
      <div style={{
        display: "flex", gap: 16, justifyContent: "center", alignItems: "center",
        minHeight: 300, position: "relative",
      }}>
        {step === 0 && products.map((p, i) => (
          <MockProductCard key={i} {...p} delay={i * 0.1} />
        ))}
        {step === 1 && (
          <>
            <MockProductCard {...products[0]} />
            <div style={{
              width: 48, height: 48, borderRadius: "50%", background: "#F5F5F4",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 800, color: "#A8A29E", letterSpacing: "0.05em",
              flexShrink: 0,
            }}>VS</div>
            <MockProductCard {...products[1]} />
          </>
        )}
        {step === 2 && (
          <>
            <MockProductCard {...products[0]} />
            <div style={{
              width: 48, height: 48, borderRadius: "50%", background: "#F5F5F4",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 800, color: "#A8A29E",
              flexShrink: 0,
            }}>VS</div>
            <MockProductCard {...products[2]} />
          </>
        )}
        {step === 3 && (
          <>
            <MockProductCard {...products[1]} eliminated />
            <MockProductCard {...products[0]} winner />
            <MockProductCard {...products[2]} eliminated />
          </>
        )}
      </div>
    </div>
  );
}
