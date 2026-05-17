import { useContext } from "react";
import { RouterCtx } from "../context/RouterContext";

export const useRouter = () => useContext(RouterCtx);
