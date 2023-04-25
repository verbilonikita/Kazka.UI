import { RefObject } from "react";
import { ICommonProps } from "../../../types/CommonProps";

interface IPinProps {
  onChange?: (value: string, position: number, add: boolean) => void;
  position?: number;
  currRef?: RefObject<unknown>;
  changeFocus?: any;
}

export default interface IPin
  extends Omit<React.HTMLAttributes<HTMLInputElement>, keyof IPinProps>,
    ICommonProps,
    IPinProps {}
