import { useState, useEffect } from "react"
import { T } from "../../styles/tokens"
import { useRouter } from "../../hooks/useRouter"
import { BRAND_NAME } from "../../constants"

export function Navbar() {
  const { page, go } = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  const links = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ]
  const isActive = (path) =>
    path === "/"
      ? page === "home"
      : page === path.replace("/", "").replace("/", "-")

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(8,8,12,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${T.border}` : "none",
          transition: "all 0.4s ease",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        {/* Logo */}
        <div
          onClick={() => go("/")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              border: `1px solid ${T.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="display"
              style={{ fontSize: 14, color: T.gold, fontWeight: 600 }}
            >
              L
            </span>
          </div>
          <span
            className="display"
            style={{
              fontSize: 18,
              letterSpacing: 4,
              fontWeight: 300,
              color: T.text,
            }}
          >
            {BRAND_NAME}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links-desktop" style={{ display: "flex", gap: 36 }}>
          {links.map((l) => (
            <button
              key={l.path}
              className={`nav-link ${isActive(l.path) ? "active" : ""}`}
              onClick={() => go(l.path)}
              style={{
                fontSize: 11,
                letterSpacing: 2,
                fontWeight: 500,
                textTransform: "uppercase",
                color: isActive(l.path) ? T.goldLight : T.textMuted,
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: T.text, padding: 4, fontSize: 24 }}
            className="hide-desktop"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: T.bg,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          {links.map((l) => (
            <button
              key={l.path}
              onClick={() => {
                go(l.path)
                setMobileOpen(false)
              }}
              className="display"
              style={{ fontSize: 28, fontWeight: 300, color: T.text }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
