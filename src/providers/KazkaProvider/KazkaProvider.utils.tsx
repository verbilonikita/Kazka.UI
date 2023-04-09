import { createContext } from "react";

export interface IKazkaProviderContext {
  theme: "light" | "dark";
  providerRef: any;
}

export const KazkaProviderContext = createContext(
  {} as unknown as IKazkaProviderContext
);
