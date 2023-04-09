import { InputHTMLAttributes } from "react";
import { EnumKazkaSizes } from "../../types/Common.types";

enum EnumAlertTypes {
  "info",
  "error",
  "success",
  "warning",
}

interface IAlertType {
  title?: string;
  message: string;
  size?: keyof typeof EnumKazkaSizes;
  type?: keyof typeof EnumAlertTypes;
  titleClassName?: string;
  messageClassName?: string;
  iconClassName?: string;
}

export interface IAlert
  extends Omit<InputHTMLAttributes<HTMLButtonElement>, keyof IAlertType>,
    IAlertType {}
