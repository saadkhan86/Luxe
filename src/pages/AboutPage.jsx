import { T } from "../styles/tokens"
import { BRAND_NAME } from "../constants"
import { Divider } from "../components/ui/Divider"

export function AboutPage() {
  return (
    <div className="fadeIn" style={{ paddingTop: 100 }}>
      <div
        style={{
          padding: "4rem 2rem 6rem",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: T.gold,
            fontSize: 10,
            letterSpacing: 5,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Est. 2023
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(2.5rem,6vw,5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          A House Built on
          <br />
          <em style={{ color: T.goldLight }}>Obsessive Craft</em>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <Divider />
        </div>
        <p
          style={{
            color: T.textMuted,
            fontSize: 15,
            lineHeight: 2,
            maxWidth: 620,
            margin: "0 auto",
          }}
        >
          {BRAND_NAME} was born from a simple conviction: that the objects we
          carry daily deserve the same consideration as the finest art. We
          travel the world seeking artisans who still believe in doing things
          the slow, correct way.
        </p>
      </div>

      <div style={{ background: T.bgSurface, padding: "4rem 2rem" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: 40,
            textAlign: "center",
          }}
        >
          {[
            ["200+", "Curated Pieces"],
            ["50K+", "Clients Served"],
            ["32", "Countries"],
            ["6", "Years of Craft"],
          ].map(([n, l]) => (
            <div key={l}>
              <p
                className="display"
                style={{
                  fontSize: 42,
                  color: T.goldLight,
                  fontWeight: 300,
                  marginBottom: 8,
                }}
              >
                {n}
              </p>
              <p
                style={{
                  color: T.textMuted,
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 80,
          }}
        >
          {[
            {
              label: "Our Mission",
              title: "Quality Without Compromise",
              body: "We believe luxury is not a price point — it is an attitude toward making. Our mission is to bring together the world's finest materials and the artisans who know how to honour them, making extraordinary objects accessible to those who truly appreciate them.",
            },
            {
              label: "Our Vision",
              title: "Heirlooms for the Modern Age",
              body: "We envision a world where people buy fewer, better things. Pieces chosen with care. Objects that age beautifully, develop character, and outlive trends. We want to be the house that crafts the things people pass down.",
            },
          ].map((s) => (
            <div key={s.label}>
              <p
                style={{
                  color: T.gold,
                  fontSize: 10,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {s.label}
              </p>
              <h3
                className="display"
                style={{
                  fontSize: 26,
                  fontWeight: 400,
                  marginBottom: 16,
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h3>
              <Divider style={{ marginBottom: 20 }} />
              <p
                style={{
                  color: T.textMuted,
                  fontSize: 14,
                  lineHeight: 1.9,
                  textAlign: "justify",
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
