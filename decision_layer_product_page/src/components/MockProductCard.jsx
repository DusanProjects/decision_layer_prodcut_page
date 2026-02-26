export default function MockProductCard({ title, price, image, delay = 0, eliminated, winner }) {
  return (
    <div style={{
      width: 180, borderRadius: 16, overflow: "hidden",
      background: "#fff",
      boxShadow: winner
        ? "0 8px 40px rgba(16,185,129,0.2), 0 0 0 2px #10B981"
        : eliminated
        ? "0 2px 8px rgba(0,0,0,0.04)"
        : "0 4px 20px rgba(0,0,0,0.08)",
      opacity: eliminated ? 0.4 : 1,
      transform: eliminated ? "scale(0.95)" : winner ? "scale(1.02)" : "none",
      transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
      position: "relative", flexShrink: 0,
    }}>
      {winner && (
        <div style={{
          position: "absolute", top: 10, right: 10, zIndex: 2,
          background: "#10B981", color: "#fff", fontSize: 10, fontWeight: 700,
          padding: "4px 10px", borderRadius: 20, letterSpacing: "0.05em",
        }}>
          ✓ YOUR PICK
        </div>
      )}
      {eliminated && (
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 2,
          background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 10, fontWeight: 700,
          padding: "4px 12px", borderRadius: 20, letterSpacing: "0.05em",
        }}>
          ELIMINATED
        </div>
      )}
      <div style={{ height: 200, background: "#F5F5F4", overflow: "hidden" }}>
        <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: eliminated ? "grayscale(0.8)" : "none" }} />
      </div>
      <div style={{ padding: "12px 14px" }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: "#44403C", marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#1C1917" }}>€{price}</div>
      </div>
    </div>
  );
}
