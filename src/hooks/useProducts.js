import { useState, useCallback } from "react";
import { INITIAL_PRODUCTS } from "../constants";

export const useProducts = () => {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem("luxe_products");
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch { return INITIAL_PRODUCTS; }
  });

  const save = useCallback((updated) => {
    setProducts(updated);
    try { localStorage.setItem("luxe_products", JSON.stringify(updated)); } catch {}
  }, []);

  const addProduct = useCallback((p) => save([...products, { ...p, id: `custom_${Date.now()}` }]), [products, save]);
  const editProduct = useCallback((id, data) => save(products.map(p => p.id === id ? { ...p, ...data } : p)), [products, save]);
  const deleteProduct = useCallback((id) => save(products.filter(p => p.id !== id)), [products, save]);

  return { products, addProduct, editProduct, deleteProduct };
};
