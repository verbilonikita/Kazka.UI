import { InputHTMLAttributes, Ref } from "react";

interface IInputEnum {
  size?: string;
  className?: string;
  ref?: Ref<HTMLInputElement> | undefined;
  isInvalid?: boolean;
}

export interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof IInputEnum>,
    IInputEnum {}
