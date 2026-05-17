import { T } from "../styles/tokens"
import { useRouter } from "../hooks/useRouter"
import { useFilter } from "../hooks/useFilter"
import { generateWhatsAppLink } from "../utils/whatsapp"
import { Button } from "../components/ui/Button"
import { Divider } from "../components/ui/Divider"
import { Badge } from "../components/ui/Badge"
import { SectionHeading } from "../components/ui/SectionHeading"
import { ProductCard } from "../components/ProductCard"

export function ProductDetailPage({ products }) {
  const { params, go } = useRouter()
  const product = products.find((p) => p.id === params.id)
  const related = useFilter(products, product?.category)
    .filter((p) => p.id !== params.id)
    .slice(0, 3)

  if (!product) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <p className="display" style={{ fontSize: 36 }}>
          Product Not Found
        </p>
        <Button onClick={() => go("/products")}>Back to Products</Button>
      </div>
    )
  }

  const whatsappLink = generateWhatsAppLink(product)

  return (
    <div className="fadeIn" style={{ paddingTop: 90 }}>
      <div className="product-detail-breadcrumbs">
        <p style={{ color: T.textMuted, fontSize: 12, letterSpacing: 1 }}>
          <button onClick={() => go("/")} style={{ color: T.textMuted }}>
            Home
          </button>
          <span style={{ margin: "0 10px" }}>›</span>
          <button
            onClick={() => go("/products")}
            style={{ color: T.textMuted }}
          >
            Products
          </button>
          <span style={{ margin: "0 10px" }}>›</span>
          <span style={{ color: T.gold }}>{product.name}</span>
        </p>
      </div>

      <div className="product-detail-container">
        <div className="product-detail-grid">
          <div className="product-detail-image-container">
            <div
              style={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                background: T.bgSurface,
              }}
            >
              {product.badge && <Badge text={product.badge} />}
              <img
                src={product.image}
                alt={product.name}
                className="product-detail-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(8,8,12,0.4) 0%, transparent 50%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          <div style={{ paddingTop: 12 }}>
            <p
              style={{
                color: T.gold,
                fontSize: 10,
                letterSpacing: 4,
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              {product.category}
            </p>
            <h1
              className="display"
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              {product.name}
            </h1>
            <Divider style={{ marginBottom: 24 }} />
            <div
              className="display"
              style={{
                fontSize: 40,
                color: T.goldLight,
                fontWeight: 300,
                marginBottom: 32,
              }}
            >
              PKR {product.price.toLocaleString()}
            </div>

            <p
              style={{
                color: T.textMuted,
                fontSize: 14,
                lineHeight: 1.9,
                marginBottom: 36,
              }}
            >
              {product.desc}
            </p>

            {product.features && (
              <div style={{ marginBottom: 40 }}>
                <p
                  style={{
                    color: T.text,
                    fontSize: 11,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  Specifications
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {product.features.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        padding: "10px 0",
                        borderBottom: `1px solid ${T.border}`,
                      }}
                    >
                      <span
                        style={{ color: T.gold, fontSize: 12, marginTop: 1 }}
                      >
                        ◆
                      </span>
                      <span
                        style={{
                          color: T.textMuted,
                          fontSize: 13,
                          lineHeight: 1.6,
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div
              style={{
                background: "rgba(27,94,32,0.08)",
                border: "1px solid rgba(46,125,50,0.25)",
                borderRadius: 4,
                padding: "24px",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  color: T.textMuted,
                  fontSize: 12,
                  marginBottom: 16,
                  lineHeight: 1.7,
                }}
              >
                To purchase this piece, connect with us directly via WhatsApp.
                Our specialists will confirm availability and arrange delivery.
              </p>
              <Button
                variant="whatsapp"
                href={whatsappLink}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: 13,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ marginRight: 4 }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Buy on WhatsApp
              </Button>
            </div>

            <Button
              variant="ghost"
              onClick={() => go("/products")}
              style={{ fontSize: 11 }}
            >
              ← Back to All Products
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div
          style={{
            background: T.bgSurface,
            padding: "5rem 2rem",
            marginTop: 60,
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHeading label="You May Also Like" title="Related Pieces" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
                gap: 24,
              }}
            >
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
