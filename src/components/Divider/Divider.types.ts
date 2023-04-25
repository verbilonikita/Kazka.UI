import { InputHTMLAttributes } from "react";

export interface IDividerProps {
  type?: "h" | "v";
}

export interface IDivider
  extends Omit<InputHTMLAttributes<HTMLDivElement>, keyof IDividerProps>,
    IDividerProps {}
