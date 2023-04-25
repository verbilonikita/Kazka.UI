import { ICommonProps } from "../../types/CommonProps";

export interface IPinProviderProps {
  gap?: string | number;
  num?: number;
  onChange: (value: string) => void;
}

export default interface IPinProvider
  extends Omit<React.HTMLAttributes<HTMLInputElement>, keyof IPinProviderProps>,
    ICommonProps,
    IPinProviderProps {}
