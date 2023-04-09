import { ICommonProps } from "../../../types/CommonProps";

interface ITextEnum {
  children: React.ReactNode | string | number;
  ellipsis?: boolean;
  size?: string;
  textAlign?: "right" | "left" | "center";
}

export default interface IText
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof ITextEnum>,
    ICommonProps,
    ITextEnum {}
