import { createContext, useContext } from "react";

export const ContextCarroCompras = createContext(null);

export const useCarroCompras = ()=>{
   return useContext(ContextCarroCompras)
}

export const ContextProductos = createContext(null);

export const useProductos = ()=>{
   return useContext(ContextProductos)
}

