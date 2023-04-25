import { EnumAccordionVariant } from "../../components/Accordion/Accordion.types";
import { ICommonProps } from "../../types/CommonProps";

export interface IAccordionProviderProps {
  children?: React.ReactElement | React.ReactElement[];
  allowMultiple?: boolean;
  variant?: keyof typeof EnumAccordionVariant;
  isClosable?: boolean;
}

export interface IAccordionProvider
  extends Omit<
      React.HTMLAttributes<HTMLParagraphElement>,
      keyof IAccordionProviderProps
    >,
    ICommonProps,
    IAccordionProviderProps {}
