import { createContext, useContext } from "react";

export const ContextCarroCompras = createContext(null);

export const useCarroCompras = ()=>{
   return useContext(ContextCarroCompras)
}

