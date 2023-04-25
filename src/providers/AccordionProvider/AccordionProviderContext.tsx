import { createContext } from "react";
import { EnumKazkaSizes } from "../../types/Common.types";

export interface IAccordionProviderContext {
  accordionList: string[];
  updateAccordionList: (id: string) => void;
  size: keyof typeof EnumKazkaSizes;
  allowMultiple: boolean;
}

export const AccordionProviderContext =
  createContext<null | IAccordionProviderContext>(null);
