import { DetailedHTMLProps, HTMLAttributes, createContext } from "react";

export enum EnumTabVariant {
  "underline",
  "outline",
}

export interface ITabsProps {
  children: React.ReactElement[];
  fullWidth?: boolean;
  initTab?: number;
  variant: keyof typeof EnumTabVariant;
  onChange?: (tab: number) => any;
}

export interface ITabsProvider
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      keyof ITabsProps
    >,
    ITabsProps {}

export interface ITabContext {
  changeTab: (i: number) => void;
  tabShown: number;
  fullWidth: boolean;
  variant: keyof typeof EnumTabVariant;
}

export const TabContext = createContext<ITabContext>(
  {} as unknown as ITabContext
);
