import { InputHTMLAttributes, Ref } from "react";
import { ICommonProps } from "../../types/CommonProps";

interface IButtonType extends ICommonProps {
  placeholder?: string;
  name?: string;
  required?: boolean;
  id?: string;
  type?: "button" | "submit" | "reset";
  ref?: Ref<HTMLButtonElement> | undefined;
  variant?: "text" | "contained" | "link";
  size?: string;
}

export interface IButton
  extends Omit<InputHTMLAttributes<HTMLButtonElement>, keyof IButtonType>,
    IButtonType {}
