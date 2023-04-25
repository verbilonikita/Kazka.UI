import { ICommonProps } from "../../types/CommonProps";

export enum EnumAccordionVariant {
  "border",
  "shadow",
}

export interface IAccordionProps {
  children?: React.ReactElement[];
  variant?: keyof typeof EnumAccordionVariant;
  isClosable?: boolean;
  open?: boolean;
}

export default interface IAccordion
  extends Omit<
      React.HTMLAttributes<HTMLParagraphElement>,
      keyof IAccordionProps
    >,
    ICommonProps,
    IAccordionProps {}
