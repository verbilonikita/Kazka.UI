import { createContext } from "react";

export enum EnumTabVariant {
  "underline",
  "outline",
}

export interface ITabContext {
  changeTab: (i: number) => void;
  tabShown: number;
  fullWidth: boolean;
  variant: keyof typeof EnumTabVariant;
}

export const TabContext = createContext<ITabContext>(
  {} as unknown as ITabContext
);
