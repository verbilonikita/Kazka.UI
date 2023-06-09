import { StyleHTMLAttributes } from "react";
import { ICommonProps } from "../../../types/CommonProps";

interface ITextEnum {
  ellipsis?: boolean;
  value?: string;
  textAlign?: "right" | "left" | "center";
  fontWeight?: number | string;
  fontSize?: number | string;
}

export default interface IText
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof ITextEnum>,
    ICommonProps,
    ITextEnum {}
