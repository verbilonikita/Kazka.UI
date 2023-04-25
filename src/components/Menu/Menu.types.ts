import { InputHTMLAttributes } from "react";

export interface IMenuProps {
  btnText: string;
}

export interface IMenu
  extends Omit<InputHTMLAttributes<HTMLDivElement>, keyof IMenuProps>,
    IMenuProps {}
