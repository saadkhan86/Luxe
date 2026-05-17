import { T } from "./styles/tokens";
import { useRouter } from "./hooks/useRouter";
import { useProducts } from "./hooks/useProducts";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminPage } from "./pages/AdminPage";

export default function App() {
  const { products, addProduct, editProduct, deleteProduct } = useProducts();
  const { page } = useRouter();

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage products={products} />;
      case "products": return <ProductsPage products={products} />;
      case "product-detail": return <ProductDetailPage products={products} />;
      case "about": return <AboutPage />;
      case "contact": return <ContactPage />;
      case "admin": return <AdminPage products={products} addProduct={addProduct} editProduct={editProduct} deleteProduct={deleteProduct} />;
      default: return <HomePage products={products} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: T.bg, color: T.text }}>
      <Navbar />
      <main>{renderPage()}</main>
      {page !== "admin" && <Footer />}
    </div>
  );
}
