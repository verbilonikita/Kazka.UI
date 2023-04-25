import { EnumKazkaSizes } from "../../types/Common.types";
import { ICommonProps } from "../../types/CommonProps";

export interface IAvatarProps {
  className?: string;
  src?: string;
}

export default interface IAvatar
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof IAvatarProps>,
    ICommonProps,
    IAvatarProps {}
