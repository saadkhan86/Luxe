import { T } from "../../styles/tokens";

export function Button({ children, variant = "gold", onClick, href, style: sx, ...rest }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "13px 32px",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: "uppercase",
    borderRadius: 2,
    transition: "all 0.25s ease",
    cursor: "pointer",
  };
  const variants = {
    gold: {
      background: `linear-gradient(135deg, ${T.gold}, ${T.goldLight})`,
      color: "#0A0A0F", border: "none",
    },
    outline: {
      background: "transparent",
      color: T.goldLight,
      border: `1px solid ${T.gold}`,
    },
    ghost: {
      background: "transparent",
      color: T.textMuted,
      border: `1px solid rgba(255,255,255,0.1)`,
    },
    danger: {
      background: "transparent",
      color: T.red,
      border: `1px solid ${T.red}`,
    },
    whatsapp: {
      background: "linear-gradient(135deg,#1B5E20,#2E7D32)",
      color: "#fff",
      border: "none",
      boxShadow: "0 4px 24px rgba(46,125,50,0.35)",
    },
  };

  const handleClick = () => {
    if (href) window.open(href, "_blank");
    if (onClick) onClick();
  };

  return (
    <button onClick={handleClick} style={{ ...base, ...variants[variant], ...sx }} {...rest}>
      {children}
    </button>
  );
}
