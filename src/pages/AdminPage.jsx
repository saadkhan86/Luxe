import { useState } from "react";
import { T } from "../styles/tokens";
import { CATEGORIES } from "../constants";
import { Button } from "../components/ui/Button";

export function AdminPage({ products, addProduct, editProduct, deleteProduct }) {
  const [view, setView] = useState("list");
  const [editing, setEditing] = useState(null);
  const [filter, setFilter] = useState("All");
  const [confirm, setConfirm] = useState(null);

  const emptyForm = { name: "", price: "", category: "Watches", shortDesc: "", desc: "", image: "", badge: "", features: "" };
  const [form, setForm] = useState(emptyForm);
  const [formErrors, setFormErrors] = useState({});

  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);

  const validateForm = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.price || isNaN(Number(form.price))) e.price = "Valid price required";
    if (!form.shortDesc.trim()) e.shortDesc = "Required";
    return e;
  };

  const handleSave = () => {
    const e = validateForm();
    if (Object.keys(e).length) { setFormErrors(e); return; }
    const data = {
      ...form,
      price: Number(form.price),
      features: form.features ? form.features.split("\n").filter(Boolean) : [],
      badge: form.badge || null,
    };
    if (editing) { editProduct(editing, data); }
    else { addProduct(data); }
    setView("list");
    setEditing(null);
    setForm(emptyForm);
    setFormErrors({});
  };

  const startEdit = (p) => {
    setEditing(p.id);
    setForm({
      name: p.name, price: String(p.price), category: p.category,
      shortDesc: p.shortDesc, desc: p.desc || "",
      image: p.image || "", badge: p.badge || "",
      features: (p.features || []).join("\n"),
    });
    setView("edit");
  };

  const handleDelete = (id) => {
    deleteProduct(id);
    setConfirm(null);
  };

  const FormField = ({ label, field, type = "text", placeholder }) => (
    <div>
      <label style={{ display: "block", color: T.textMuted, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>{label}</label>
      <input className="lux-input" type={type} placeholder={placeholder} value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })} />
      {formErrors[field] && <p style={{ color: T.red, fontSize: 11, marginTop: 4 }}>{formErrors[field]}</p>}
    </div>
  );

  return (
    <div className="fadeIn" style={{ paddingTop: 90, minHeight: "100vh" }}>
      <div style={{ padding: "2rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ color: T.gold, fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 6 }}>Admin Panel</p>
            <h1 className="display" style={{ fontSize: 32, fontWeight: 400 }}>Product Management</h1>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {view !== "list" && (
              <Button variant="ghost" onClick={() => { setView("list"); setEditing(null); setForm(emptyForm); setFormErrors({}); }}>
                ← Back to List
              </Button>
            )}
            {view === "list" && (
              <Button onClick={() => setView("add")}>+ Add Product</Button>
            )}
          </div>
        </div>

        {view === "list" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 16, marginBottom: 32 }}>
            {[["Total", products.length], ...CATEGORIES.map(c => [c, products.filter(p => p.category === c).length])].map(([l, n]) => (
              <div key={l} style={{ background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: 4, padding: "16px 20px" }}>
                <p style={{ color: T.textFaint, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>{l}</p>
                <p className="display" style={{ fontSize: 28, color: T.goldLight }}>{n}</p>
              </div>
            ))}
          </div>
        )}

        {(view === "add" || view === "edit") && (
          <div style={{ background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: 4, padding: 40, maxWidth: 800 }}>
            <h2 className="display" style={{ fontSize: 24, fontWeight: 400, marginBottom: 28 }}>
              {view === "edit" ? "Edit Product" : "Add New Product"}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <FormField label="Product Name" field="name" placeholder="e.g. Chrono Noir II" />
              <FormField label="Price (USD)" field="price" type="number" placeholder="e.g. 1500" />
              <div>
                <label style={{ display: "block", color: T.textMuted, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Category</label>
                <select className="lux-input" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", color: T.textMuted, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Badge (optional)</label>
                <select className="lux-input" value={form.badge} onChange={e => setForm({ ...form, badge: e.target.value })}>
                  <option value="">None</option>
                  <option value="New">New</option>
                  <option value="Bestseller">Bestseller</option>
                  <option value="Limited">Limited</option>
                </select>
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <FormField label="Short Description" field="shortDesc" placeholder="One-line summary shown on card" />
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <label style={{ display: "block", color: T.textMuted, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Full Description</label>
                <textarea className="lux-input" rows={4} placeholder="Full product story..." value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} style={{ resize: "vertical" }} />
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <FormField label="Image URL" field="image" placeholder="https://..." />
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <label style={{ display: "block", color: T.textMuted, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Features / Specs (one per line)</label>
                <textarea className="lux-input" rows={4} placeholder="Swiss movement&#10;Sapphire crystal&#10;5ATM water resistance" value={form.features} onChange={e => setForm({ ...form, features: e.target.value })} style={{ resize: "vertical" }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <Button onClick={handleSave}>{view === "edit" ? "Save Changes" : "Add Product"}</Button>
              <Button variant="ghost" onClick={() => { setView("list"); setEditing(null); setForm(emptyForm); setFormErrors({}); }}>Cancel</Button>
            </div>
          </div>
        )}

        {view === "list" && (
          <>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {["All", ...CATEGORIES].map(c => (
                <button key={c} onClick={() => setFilter(c)} style={{
                  padding: "7px 18px", borderRadius: 2, fontSize: 11, letterSpacing: 1.5, fontWeight: 500, textTransform: "uppercase",
                  border: `1px solid ${filter === c ? T.gold : "rgba(255,255,255,0.1)"}`,
                  background: filter === c ? "rgba(201,168,76,0.1)" : "transparent",
                  color: filter === c ? T.goldLight : T.textMuted, transition: "all 0.2s",
                }}>{c}</button>
              ))}
            </div>

            <div style={{ background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: 4, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                    {["Image", "Name", "Category", "Price", "Badge", "Actions"].map(h => (
                      <th key={h} style={{ padding: "14px 20px", textAlign: "left", color: T.textFaint, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", fontWeight: 500 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(p => (
                    <tr key={p.id} className="admin-row" style={{ borderBottom: `1px solid ${T.border}`, transition: "background 0.2s" }}>
                      <td style={{ padding: "12px 20px" }}>
                        {p.image ? (
                          <img src={p.image} alt="" style={{ width: 52, height: 42, objectFit: "cover", borderRadius: 2 }} />
                        ) : (
                          <div style={{ width: 52, height: 42, background: T.bgSurface, borderRadius: 2 }} />
                        )}
                      </td>
                      <td style={{ padding: "12px 20px" }}>
                        <p style={{ fontSize: 14, marginBottom: 2 }}>{p.name}</p>
                        <p style={{ color: T.textFaint, fontSize: 11 }}>{p.shortDesc?.substring(0, 40)}...</p>
                      </td>
                      <td style={{ padding: "12px 20px" }}>
                        <span style={{ color: T.gold, fontSize: 11, letterSpacing: 1, border: `1px solid ${T.border}`, padding: "3px 10px", borderRadius: 2 }}>{p.category}</span>
                      </td>
                      <td style={{ padding: "12px 20px" }}>
                        <span className="display" style={{ fontSize: 16, color: T.goldLight }}>${p.price.toLocaleString()}</span>
                      </td>
                      <td style={{ padding: "12px 20px" }}>
                        {p.badge ? (
                          <span style={{ fontSize: 10, background: "rgba(201,168,76,0.1)", color: T.gold, padding: "3px 10px", borderRadius: 2, letterSpacing: 1 }}>{p.badge}</span>
                        ) : (
                          <span style={{ color: T.textFaint, fontSize: 11 }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: "12px 20px" }}>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button
                            onClick={() => startEdit(p)}
                            style={{ padding: "6px 14px", border: `1px solid ${T.border}`, borderRadius: 2, color: T.textMuted, fontSize: 11, letterSpacing: 1, transition: "all 0.2s" }}
                            onMouseEnter={e => { e.target.style.borderColor = T.gold; e.target.style.color = T.gold; }}
                            onMouseLeave={e => { e.target.style.borderColor = T.border; e.target.style.color = T.textMuted; }}
                          >Edit</button>
                          <button
                            onClick={() => setConfirm(p.id)}
                            style={{ padding: "6px 14px", border: `1px solid rgba(226,75,74,0.3)`, borderRadius: 2, color: T.red, fontSize: 11, letterSpacing: 1, transition: "all 0.2s" }}
                            onMouseEnter={e => e.target.style.borderColor = T.red}
                            onMouseLeave={e => e.target.style.borderColor = "rgba(226,75,74,0.3)"}
                          >Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={6} style={{ padding: "3rem", textAlign: "center", color: T.textFaint, fontSize: 14 }}>
                        No products in this category
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {confirm && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 2000,
          background: "rgba(8,8,12,0.85)", backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: 4, padding: "40px 48px", maxWidth: 400, textAlign: "center" }}>
            <div style={{ color: T.red, fontSize: 32, marginBottom: 16 }}>⚠</div>
            <h3 className="display" style={{ fontSize: 24, fontWeight: 400, marginBottom: 12 }}>Delete Product?</h3>
            <p style={{ color: T.textMuted, fontSize: 13, lineHeight: 1.7, marginBottom: 28 }}>
              This action cannot be undone. The product will be permanently removed from the catalog.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <Button variant="danger" onClick={() => handleDelete(confirm)}>Delete</Button>
              <Button variant="ghost" onClick={() => setConfirm(null)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
