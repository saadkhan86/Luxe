import { T } from "../../styles/tokens"
import { useRouter } from "../../hooks/useRouter"
import { BRAND_NAME } from "../../constants"
import { Divider } from "../ui/Divider"

export function Footer() {
  const { go } = useRouter()
  return (
    <footer
      style={{
        padding: "4rem 2rem 2rem",
        marginTop: 20,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div>
            <div
              className="display"
              style={{ fontSize: 22, letterSpacing: 4, marginBottom: 16 }}
            >
              {BRAND_NAME}
            </div>
            <Divider width={40} style={{ marginBottom: 16 }} />
            <p
              style={{
                color: T.textMuted,
                fontSize: 13,
                lineHeight: 1.9,
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              Curated luxury accessories crafted for those who live
              deliberately. Every piece is a testament to timeless craft.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              {[
                { icon: "fa-brands fa-instagram", link: "#" },
                { icon: "fa-brands fa-whatsapp", link: "#" },
                { icon: "fa-brands fa-tiktok", link: "#" },
                { icon: "fa-brands fa-facebook", link: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  style={{
                    color: T.textMuted,
                    fontSize: 18,
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `1px solid ${T.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = T.gold
                    e.currentTarget.style.borderColor = T.gold
                    e.currentTarget.style.transform = "translateY(-3px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = T.textMuted
                    e.currentTarget.style.borderColor = T.border
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div
            className="hide-mobile"
            style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <p
              style={{
                color: T.gold,
                fontSize: 10,
                letterSpacing: 3,
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Navigate
            </p>
            {[
              ["Home", "/"],
              ["Products", "/products"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([l, p]) => (
              <button
                key={p}
                onClick={() => go(p)}
                style={{
                  display: "block",
                  textAlign: "right",
                  color: T.textMuted,
                  fontSize: 13,
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = T.goldLight)}
                onMouseLeave={(e) => (e.target.style.color = T.textMuted)}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: `1px solid ${T.border}`,
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: T.textFaint, fontSize: 11, letterSpacing: 1 }}>
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <p style={{ color: T.textFaint, fontSize: 11, letterSpacing: 1 }}>
            CRAFTED WITH PRECISION
          </p>
        </div>
      </div>
    </footer>
  )
}
