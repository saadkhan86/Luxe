import { useState } from "react"
import { T } from "../styles/tokens"
import { WHATSAPP_NUMBER } from "../constants"
import { Button } from "../components/ui/Button"
import { SectionHeading } from "../components/ui/SectionHeading"

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required"
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message must be at least 10 characters"
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }
    setSent(true)
  }

  return (
    <div className="fadeIn" style={{ paddingTop: 100 }}>
      <div className="contact-container">
        <div className="contact-grid">
          <div>
            <SectionHeading
              label="Get in Touch"
              title={
                <>
                  Let's Start a<br />
                  Conversation
                </>
              }
            />
            <p
              style={{
                color: T.textMuted,
                fontSize: 14,
                lineHeight: 1.9,
                marginBottom: 40,
              }}
            >
              Whether you're seeking a bespoke piece, have questions about an
              order, or simply wish to learn more about our craft — our team is
              at your service.
            </p>

            {[
              { icon: "✉", label: "Email Us", val: "hello@luxemaison.com" },
              { icon: "◎", label: "WhatsApp", val: `+${WHATSAPP_NUMBER}` },
              { icon: "⊕", label: "Hours", val: "Mon – Sat, 10am – 8pm PKT" },
            ].map((c) => (
              <div
                key={c.label}
                style={{ display: "flex", gap: 16, marginBottom: 28 }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    border: `1px solid ${T.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: T.gold,
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <p
                    style={{
                      color: T.textFaint,
                      fontSize: 10,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </p>
                  <p style={{ color: T.text, fontSize: 14 }}>{c.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-card">
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div
                  style={{
                    color: T.gold,
                    fontSize: 40,
                    marginBottom: 20,
                  }}
                >
                  ◆
                </div>
                <h3
                  className="display"
                  style={{
                    fontSize: 28,
                    fontWeight: 400,
                    marginBottom: 12,
                  }}
                >
                  Message Received
                </h3>
                <p
                  style={{
                    color: T.textMuted,
                    fontSize: 14,
                    lineHeight: 1.8,
                  }}
                >
                  Thank you for reaching out. A member of our team will respond
                  within 24 hours.
                </p>
              </div>
            ) : (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <p
                  className="display"
                  style={{ fontSize: 22, fontWeight: 400, marginBottom: 8 }}
                >
                  Send a Message
                </p>
                {[
                  {
                    key: "name",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Your name",
                  },
                  {
                    key: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "your@email.com",
                  },
                ].map((f) => (
                  <div key={f.key}>
                    <label
                      style={{
                        display: "block",
                        color: T.textMuted,
                        fontSize: 10,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      {f.label}
                    </label>
                    <input
                      className="lux-input"
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) =>
                        setForm({ ...form, [f.key]: e.target.value })
                      }
                    />
                    {errors[f.key] && (
                      <p style={{ color: T.red, fontSize: 11, marginTop: 6 }}>
                        {errors[f.key]}
                      </p>
                    )}
                  </div>
                ))}
                <div>
                  <label
                    style={{
                      display: "block",
                      color: T.textMuted,
                      fontSize: 10,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    className="lux-input"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{ resize: "vertical" }}
                  />
                  {errors.message && (
                    <p style={{ color: T.red, fontSize: 11, marginTop: 6 }}>
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleSubmit}
                  style={{ justifyContent: "center", marginTop: 8 }}
                >
                  Send Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
