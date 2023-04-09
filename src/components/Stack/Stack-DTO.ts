import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

interface IStackEnum {
  children: React.ReactNode | React.ReactNode[];
  gap?: number | string;
  align?: "stretch" | "center" | "start" | "end";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  p?: number | string;
}

export interface IStack
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      keyof IStackEnum
    >,
    IStackEnum {}
