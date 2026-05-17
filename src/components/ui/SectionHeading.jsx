import { T } from "../../styles/tokens";
import { Divider } from "./Divider";

export function SectionHeading({ label, title, subtitle, center }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "3rem" }}>
      {label && (
        <p style={{ color: T.gold, fontSize: 11, letterSpacing: 4, fontWeight: 600, textTransform: "uppercase", marginBottom: 14 }}>
          {label}
        </p>
      )}
      <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 16 }}>
        {title}
      </h2>
      {center
        ? <div style={{ display: "flex", justifyContent: "center" }}><Divider /></div>
        : <Divider />
      }
      {subtitle && (
        <p style={{ color: T.textMuted, fontSize: 14, lineHeight: 1.8, marginTop: 16, maxWidth: 520, ...(center ? { margin: "16px auto 0" } : {}) }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
