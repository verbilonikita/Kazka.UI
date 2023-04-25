import { EnumKazkaSizes } from "./Common.types";

export interface ICommonProps {
  size?: keyof typeof EnumKazkaSizes;
}
