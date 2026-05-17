import { useMemo } from "react";

export const useFilter = (products, category) =>
  useMemo(() => category === "All" ? products : products.filter(p => p.category === category), [products, category]);
