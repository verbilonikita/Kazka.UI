import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITabMainProviderProps {
  gap?: boolean;
}

export interface ITabMainProvider
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      keyof ITabMainProviderProps
    >,
    ITabMainProviderProps {}
