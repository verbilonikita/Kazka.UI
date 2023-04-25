import { createContext } from "react";
import { EnumKazkaSizes } from "../../types/Common.types";

interface IAccordionContext {
  size: keyof typeof EnumKazkaSizes;
  accordionId: string;
  isAccordionOpen: boolean;
  updateAccordionList: (id: string) => void;
  isClosable: boolean;
}

export const AccordionContext = createContext<IAccordionContext | null>(null);
