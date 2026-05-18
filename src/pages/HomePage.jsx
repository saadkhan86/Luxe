import { useMemo } from "react"
import { T } from "../styles/tokens"
import { useRouter } from "../hooks/useRouter"
import { CATEGORIES } from "../constants"
import { Button } from "../components/ui/Button"
import { Divider } from "../components/ui/Divider"
import { SectionHeading } from "../components/ui/SectionHeading"
import { ProductCard } from "../components/ProductCard"
import { CategoryCard } from "../components/CategoryCard"

export function HomePage({ products }) {
  const { go } = useRouter()

  const featuredProducts = useMemo(() => {
    const featured = []
    CATEGORIES.forEach((cat) => {
      const found = products.find((p) => p.category === cat)
      if (found) featured.push(found)
    })
    return featured.slice(0, 3)
  }, [products])

  return (
    <div className="fadeIn">
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background: `radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.06) 0%, transparent 60%),
                       radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "45%",
            clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
            paddingTop: 70,
          }}
        >
          <div style={{ maxWidth: 620 }} className="hero-page-container">
            <p
              className="fadeUp hero-subtitle"
              style={{
                color: T.gold,
                fontSize: 13,
                letterSpacing: 5,
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: 24,
                animationDelay: "0.1s",
                opacity: 0,
              }}
            >
              The Art of Luxury Living
            </p>
            <h1
              className="display hero-title fadeUp"
              style={{
                fontSize: "clamp(3.5rem,7vw,6rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                marginBottom: 12,
                animationDelay: "0.2s",
                opacity: 0,
              }}
            >
              Where Craft
              <br />
              <em style={{ color: T.goldLight, fontStyle: "italic" }}>
                Meets Eternity
              </em>
            </h1>
            <div
              className="fadeUp"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              <Divider style={{ marginBottom: 24 }} />
            </div>
            <p
              className="fadeUp hero-description"
              style={{
                color: T.textMuted,
                fontSize: 15,
                lineHeight: 1.9,
                marginBottom: 40,
                maxWidth: 440,
                animationDelay: "0.4s",
                opacity: 0,
              }}
            >
              Curated luxury accessories for those who value precision,
              elegance, and enduring design. Every piece reflects exceptional
              artistry, premium materials, and a relentless dedication to
              detail.
            </p>
            <div
              className="fadeUp"
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                animationDelay: "0.5s",
                opacity: 0,
              }}
            >
              <Button className="hero-btn" onClick={() => go("/products")}>
                Explore Collection
              </Button>
              <Button
                className="hero-btn"
                variant="outline"
                onClick={() => go("/about")}
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        style={{ padding: "5rem 2rem", maxWidth: 1100, margin: "0 auto" }}
      >
        <SectionHeading
          label="Collections"
          title={
            <>
              Our Curated
              <br />
              Collections
            </>
          }
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 20,
          }}
        >
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat}
              name={cat}
              onClick={() =>
                go(`/products?category=${encodeURIComponent(cat)}`)
              }
            />
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ padding: "4rem 2rem 6rem", background: T.bgSurface }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading
            label="Handpicked"
            title="Featured Pieces"
            subtitle="A selection of our finest, chosen by our curators this season."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 24,
            }}
          >
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Button variant="outline" onClick={() => go("/products")}>
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section
        style={{
          padding: "5rem 2rem",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 40,
            textAlign: "center",
          }}
        >
          {[
            {
              icon: "✦",
              title: "Rare Materials",
              desc: "Sourced from the world's most respected craftspeople and tanneries.",
            },
            {
              icon: "◈",
              title: "Lifetime Warranty",
              desc: "We stand behind every piece with our lifetime craftsmanship guarantee.",
            },
            {
              icon: "⊕",
              title: "White Glove Delivery",
              desc: "Complimentary express shipping with signature-required delivery.",
            },
            {
              icon: "⊗",
              title: "Bespoke Service",
              desc: "Personalisation and engraving available on selected pieces.",
            },
          ].map((p) => (
            <div key={p.title}>
              <div style={{ color: T.gold, fontSize: 24, marginBottom: 16 }}>
                {p.icon}
              </div>
              <h4
                className="display"
                style={{ fontSize: 18, fontWeight: 400, marginBottom: 10 }}
              >
                {p.title}
              </h4>
              <p style={{ color: T.textMuted, fontSize: 13, lineHeight: 1.8 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
