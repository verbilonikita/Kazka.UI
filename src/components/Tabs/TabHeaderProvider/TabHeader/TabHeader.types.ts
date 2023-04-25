import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITabHeaderProps {
  handleClick?: () => void;
  tabIndex?: number;
}

export interface ITabHeader
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      keyof ITabHeaderProps
    >,
    ITabHeaderProps {}
