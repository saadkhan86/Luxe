import { T } from "../styles/tokens";
import { CATEGORY_ICONS } from "../constants";
import { Icon } from "./ui/Icon";

export function CategoryCard({ name, onClick }) {
  return (
    <div
      className="cat-card"
      onClick={onClick}
      style={{
        background: T.bgCard, border: `1px solid ${T.border}`,
        borderRadius: 4, padding: "2.5rem 2rem",
        cursor: "pointer", transition: "all 0.3s ease",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", inset: 0, background: `radial-gradient(ellipse at center bottom, rgba(201,168,76,0.06) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div className="cat-icon" style={{ color: T.textFaint, marginBottom: 20, transition: "color 0.3s" }}>
        <Icon html={CATEGORY_ICONS[name]} size={36} />
      </div>
      <h3 className="display" style={{ fontSize: 22, fontWeight: 400, marginBottom: 10 }}>{name}</h3>
      <div style={{ width: 30, height: 1, background: T.gold, margin: "0 auto 14px" }} />
      <p style={{ color: T.textMuted, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 500 }}>
        Shop Collection
      </p>
    </div>
  );
}
