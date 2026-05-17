import { createContext, useContext, useState, useEffect, useCallback } from "react";

export const RouterCtx = createContext({ page: "home", params: {}, go: () => {} });

export function RouterProvider({ children }) {
  const [route, setRoute] = useState(() => {
    const h = window.location.hash.replace("#", "") || "/";
    return h;
  });

  useEffect(() => {
    const handler = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const go = useCallback((path) => {
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  let page = "home", params = {};
  const [pathname, searchStr] = route.split("?");

  if (pathname === "/" || pathname === "") {
    page = "home";
  } else if (pathname === "/products") {
    page = "products";
    if (searchStr) {
      const searchParams = new URLSearchParams(searchStr);
      params.category = searchParams.get("category");
    }
  } else if (pathname.startsWith("/product/")) {
    page = "product-detail";
    params.id = pathname.split("/product/")[1];
  } else if (pathname === "/about") {
    page = "about";
  } else if (pathname === "/contact") {
    page = "contact";
  } else if (pathname === "/admin") {
    page = "admin";
  }

  return (
    <RouterCtx.Provider value={{ page, params, go }}>
      {children}
    </RouterCtx.Provider>
  );
}
