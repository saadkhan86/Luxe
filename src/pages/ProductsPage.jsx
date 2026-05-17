import { T } from "../styles/tokens";
import { useFilter } from "../hooks/useFilter";
import { useRouter } from "../hooks/useRouter";
import { CATEGORIES } from "../constants";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ProductCard } from "../components/ProductCard";

export function ProductsPage({ products }) {
  const { params, go } = useRouter();
  const activeCategory = params.category || "All";
  const filtered = useFilter(products, activeCategory);

  return (
    <div className="fadeIn" style={{ paddingTop: 100 }}>
      <div style={{ padding: "3rem 2rem 0", maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeading
          label="The Collection"
          title="All Products"
          subtitle="Every piece is curated and authenticated by our team of specialists."
        />
      </div>

      <div style={{
        position: "sticky", top: 70, zIndex: 50,
        background: "rgba(8,8,12,0.92)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${T.border}`,
        padding: "14px 2rem",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ color: T.textFaint, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginRight: 8 }}>Filter:</span>
          {["All", ...CATEGORIES].map(cat => (
            <button
              key={cat}
              className="filter-pill"
              onClick={() => {
                if (cat === "All") {
                  go("/products");
                } else {
                  go(`/products?category=${encodeURIComponent(cat)}`);
                }
              }}
              style={{
                padding: "7px 20px", borderRadius: 2,
                border: `1px solid ${activeCategory === cat ? T.gold : "rgba(255,255,255,0.1)"}`,
                background: activeCategory === cat ? "rgba(201,168,76,0.1)" : "transparent",
                color: activeCategory === cat ? T.goldLight : T.textMuted,
                fontSize: 11, letterSpacing: 1.5, fontWeight: 500, textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >{cat}</button>
          ))}
          <span style={{ color: T.textFaint, fontSize: 11, marginLeft: "auto" }}>{filtered.length} pieces</span>
        </div>
      </div>

      <div style={{ padding: "3rem 2rem 5rem", maxWidth: 1100, margin: "0 auto" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem", color: T.textMuted }}>
            <p className="display" style={{ fontSize: 28, marginBottom: 12 }}>No products found</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 28 }}>
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
