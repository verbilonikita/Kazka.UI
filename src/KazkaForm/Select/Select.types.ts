import { ICommonProps } from "../../types/CommonProps";

export interface ISelectProps {
  placeholder?: string;
  name: string;
  required: boolean;
  p?: string | number;
}

export default interface ISelect
  extends Omit<React.HTMLAttributes<HTMLInputElement>, keyof ISelectProps>,
    ICommonProps,
    ISelectProps {}
