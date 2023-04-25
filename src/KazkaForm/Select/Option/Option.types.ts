export interface IOptionProps {
  children: React.ReactElement | string;
  value: string;
  setValue?: (name: string, value: string) => void;
  name?: string;
  validate?: boolean;
  defaultValue?: boolean;
  size?: string;
}

export default interface IOption
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof IOptionProps>,
    IOptionProps {}
