import { T } from "../styles/tokens"
import { useRouter } from "../hooks/useRouter"
import { Badge } from "./ui/Badge"

export function ProductCard({ product }) {
  const { go } = useRouter()
  return (
    <div
      className="product-card"
      onClick={() => go(`/product/${product.id}`)}
      style={{
        background: T.bgCard,
        border: `1px solid ${T.border}`,
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = T.borderHover
        e.currentTarget.style.boxShadow = `0 12px 48px rgba(0,0,0,0.5)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = T.border
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {product.badge && <Badge text={product.badge} />}
      <div style={{ overflow: "hidden", height: 240, background: "#0a0a10" }}>
        <img
          className="product-img"
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
            display: "block",
          }}
          onError={(e) => {
            e.target.style.display = "none"
          }}
        />
      </div>
      <div style={{ padding: "20px 24px 24px" }}>
        <p
          style={{
            color: T.gold,
            fontSize: 10,
            letterSpacing: 2,
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {product.category}
        </p>
        <h3
          className="display"
          style={{
            fontSize: 20,
            fontWeight: 400,
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            color: T.textMuted,
            fontSize: 12,
            lineHeight: 1.7,
            marginBottom: 16,
          }}
        >
          {product.shortDesc}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            className="display"
            style={{ fontSize: 22, color: T.goldLight, fontWeight: 300 }}
          >
            PKR {product.price.toLocaleString()}
          </span>
          <span
            style={{
              color: T.gold,
              fontSize: 11,
              letterSpacing: 1,
              fontWeight: 500,
            }}
          >
            VIEW →
          </span>
        </div>
      </div>
    </div>
  )
}
