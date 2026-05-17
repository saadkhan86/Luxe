# ✦ Luxe Maison ✦

> **The Art of Luxury Living. Where Craft Meets Eternity.**

Luxe Maison is an exquisite, ultra-premium e-commerce boutique specializing in curated luxury accessories (watches, perfumes, wallets, bags, etc.). Crafted with minimal, state-of-the-art aesthetics and a sophisticated design system, the application delivers a seamless, high-end catalog browsing experience alongside a robust administrator inventory management panel.

---

## ◈ Vision & Design Philosophy

Luxe Maison is designed to feel exceptionally premium. Stripped of loud, generic elements, the design system utilizes a carefully curated color palette of **velvet-slate dark backgrounds**, **glowing gold accents**, **smooth glassmorphism glass panels**, and **elegant typography**. 

Every transition uses micro-interactions and smooth slide-up/fade-in animations to ensure the interface feels alive, tactile, and highly responsive.

---

## ✦ Core Features

*   **Exquisite Luxury Aesthetics:** Deep dark-mode theme utilizing warm, curated gold accents (`#C9A84C`), soft gold-lit text highlights, and high-fidelity product imagery.
*   **Intuitive Single-Page Router:** A bespoke, lightweight hash-based routing engine built purely in React (`window.location.hash`). Allows immediate back/forward browser support and elegant URL-driven state sharing without bulky third-party dependencies.
*   **Dynamic Product Catalog:** Real-time filterable views across collections (Watches, Perfumes, Wallets, Bags) with sophisticated product cards and detailed product pages detailing premium specifications.
*   **Automated Concierge Ordering:** Instant checkout integration through **WhatsApp API**. When a client decides to buy, the app generates an automated, pre-formatted order request containing catalog numbers and pricing to connect them directly to a live concierge.
*   **Interactive Admin Control Center:** A secure, local-storage-persisted administrator dashboard supporting complete **CRUD operations** (Create, Read, Update, Delete) to easily add new luxury collections, change prices, attach badges (`New`, `Bestseller`, `Limited`), or update specs.

---

## 🛠 Tech Stack

*   **Core Framework:** [React 18.2.0](https://reactjs.org/) (Functional Components, Custom Context hooks)
*   **Build Pipeline & Dev Server:** [Vite 4.2.0](https://vitejs.dev/) (Rapid Hot Module Replacement, optimized production bundles)
*   **Styling Architecture:** Pure CSS3 + Dynamic JS Style Tokens (Clean, highly maintainable theme tokens via [`tokens.js`](file:///d:/ec/src/styles/tokens.js) and bespoke layout presets inside [`global.css`](file:///d:/ec/src/styles/global.css))
*   **Typography:** Google Fonts Integration (*Jost* for clean sans-serif geometry and *Cormorant Garamond* for serif editorial prestige)
*   **Vector Iconography:** Custom SVGs and FontAwesome Integration

---

## 📁 Repository Structure

```markdown
d:\ec\
├── .git/                      # Version control history
├── dist/                      # Optimised build assets for production
├── node_modules/              # Project dependencies
├── src/
│   ├── components/            # Reusable UI parts & layouts
│   │   ├── layout/
│   │   │   ├── Footer.jsx     # Sleek footer links & copyright notice
│   │   │   └── Navbar.jsx     # Responsive navbar with mobile burger menu
│   │   ├── ui/
│   │   │   ├── Badge.jsx      # Luxury tag pill (New, Bestseller, etc.)
│   │   │   ├── Button.jsx     # Custom styled premium button variants
│   │   │   ├── Divider.jsx    # Sophisticated content separation line
│   │   │   ├── Icon.jsx       # Custom SVG wrapper component
│   │   │   └── SectionHeading.jsx # Dual-font editorial section headers
│   │   ├── CategoryCard.jsx   # Interactive collection category card
│   │   └── ProductCard.jsx    # Hover-animated product card with error fallback
│   ├── constants/
│   │   └── index.js           # Catalog database & WhatsApp constants
│   ├── context/
│   │   └── RouterContext.jsx  # Hash Router Context & window hook provider
│   ├── hooks/
│   │   ├── useFilter.js       # Live product category filters
│   │   ├── useProducts.js     # State manager with localStorage synchronization
│   │   └── useRouter.js       # Global routing state accessor
│   ├── pages/
│   │   ├── AboutPage.jsx      # Editorial about page
│   │   ├── AdminPage.jsx      # Comprehensive catalog management dashboard
│   │   ├── ContactPage.jsx    # Bespoke client relations & map page
│   │   ├── HomePage.jsx       # Majestic hero landing & editorial pillars
│   │   ├── ProductDetailPage.jsx # Rich product specs & WhatsApp checkouts
│   │   └── ProductsPage.jsx   # Infinite scroll catalog with filters
│   ├── styles/
│   │   ├── global.css         # Keyframes, global scrollbar, & grid layout styles
│   │   └── tokens.js          # Unified theme token configurations (hex codes)
│   ├── utils/
│   │   └── whatsapp.js        # Concierge deep-link message formatter
│   ├── App.jsx                # Layout scaffold & high-level view router
│   └── main.jsx               # React DOM hydration root
├── index.html                 # App container HTML
├── package.json               # Scripts, manifest, and dependencies
├── vite.config.js             # Vite configuration files
└── README.md                  # Beautiful luxury project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v16.x or newer) installed on your system.

### 1. Installation
Clone the repository and install the required dependencies:
```bash
npm install
```

### 2. Development Server
Run the local Vite development server:
```bash
npm run dev
```
Once started, open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

### 3. Production Build
Compile the application into optimized static assets ready for deployment:
```bash
npm run build
```
You can review the built files locally by spinning up a preview server:
```bash
npm run preview
```

---

## ✦ Code Architecture Highlights

### 1. The Design Token System ([`tokens.js`](file:///d:/ec/src/styles/tokens.js))
Luxe Maison uses a single source of truth for styles, allowing quick palette swapping:
```javascript
export const T = {
  gold: "#C9A84C",
  goldLight: "#E8CC80",
  goldDark: "#9A7A30",
  bg: "#08080C",
  bgCard: "#0F0F17",
  border: "rgba(201,168,76,0.15)",
  text: "#F5F0E8",
  textMuted: "rgba(245,240,232,0.5)",
  // ...
};
```

### 2. Lightweight Hash Routing ([`RouterContext.jsx`](file:///d:/ec/src/context/RouterContext.jsx))
Instead of adding bulk to the final package, the application listens to `hashchange` events:
```javascript
const go = useCallback((path) => {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);
```

### 3. Local Storage Sync ([`useProducts.js`](file:///d:/ec/src/hooks/useProducts.js))
State-based collections automatically persist inside the user's browser, enabling instant preview of additions or edits performed via the Admin Portal:
```javascript
const save = useCallback((updated) => {
  setProducts(updated);
  try { localStorage.setItem("luxe_products", JSON.stringify(updated)); } catch {}
}, []);
```

---

## ◈ License & Copyright
All rights reserved © 2026 **Luxe Maison**. Designed for maximum luxury, visual excellence, and high performance.
