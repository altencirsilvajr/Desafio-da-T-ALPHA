import { Product, VariablesContextType, defaultValue } from "@/interface";
import { getToken, logout } from "@/utils/authenticator";
import { getProducts } from "@/utils/products";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

const ContextProvider = createContext<VariablesContextType>(defaultValue);

export default function ParamsContextProvider({ children }: { children: ReactNode }) {
  const [productData, setProductData] = useState<Product[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <ContextProvider.Provider value={{ productData, setProductData, isDarkMode, setIsDarkMode}}>
      {children}
    </ContextProvider.Provider>
  );
}

export const useContextGlobal = () => useContext(ContextProvider);
