import { DetailedHTMLProps, HTMLAttributes } from "react";
import { EnumKazkaSizes } from "../../../types/Common.types";

export interface IHeadingProps {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: EnumKazkaSizes;
  value?: string;
  pb?: string;
}

export interface IHeading
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLDivElement>,
      keyof IHeadingProps
    >,
    IHeadingProps {}
