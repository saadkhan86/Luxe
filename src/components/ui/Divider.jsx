import { T } from "../../styles/tokens";

export function Divider({ width = 48, style: sx }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, ...sx }}>
      <div style={{ width, height: 1, background: `linear-gradient(90deg,${T.gold},transparent)` }} />
      <div style={{ width: 4, height: 4, borderRadius: "50%", background: T.gold }} />
      <div style={{ width: width / 2, height: 1, background: `linear-gradient(90deg,${T.gold},transparent)` }} />
    </div>
  );
}
