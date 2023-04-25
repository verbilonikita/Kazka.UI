import { EnumKazkaSizes } from "../../../types/Common.types";
import { ICommonProps } from "../../../types/CommonProps";

export interface IAccordionBodyProps {
  children: React.ReactElement;
  customBody?: React.ReactElement;
  size?: keyof typeof EnumKazkaSizes;
}

export default interface IAccordionBody
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof IAccordionBodyProps>,
    IAccordionBodyProps {}
