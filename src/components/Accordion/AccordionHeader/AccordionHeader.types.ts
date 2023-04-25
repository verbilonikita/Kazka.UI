import { EnumKazkaSizes } from "../../../types/Common.types";

export interface IAccordionHeaderProps {
  customTitle?: React.ReactElement;
  customIcon?: React.ReactElement;
  size?: keyof typeof EnumKazkaSizes;
  children: string;
  ellipsis?: boolean;
  fontWeight?: string | number;
}

export default interface IAccordionHeader
  extends Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof IAccordionHeaderProps
    >,
    IAccordionHeaderProps {}
