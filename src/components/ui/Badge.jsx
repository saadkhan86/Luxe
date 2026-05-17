import { T } from "../../styles/tokens";

export function Badge({ text }) {
  const colors = { Bestseller: T.gold, Limited: "#C0392B", New: "#2980B9" };
  return (
    <span style={{
      position: "absolute", top: 14, right: 14, zIndex: 2,
      background: colors[text] || T.gold,
      color: text === "Bestseller" ? "#08080C" : "#fff",
      fontSize: 9, fontWeight: 700, letterSpacing: 1.5,
      textTransform: "uppercase", padding: "4px 10px", borderRadius: 2,
    }}>{text}</span>
  );
}
