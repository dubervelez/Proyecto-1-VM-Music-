import { createContext, useContext } from "react";

export const ContextCards = createContext(null);

export const useCardsData = ()=>{
   return useContext(ContextCards)
}

