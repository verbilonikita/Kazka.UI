export interface IAccordionBodyProps {
  children: React.ReactElement;
  customBody?: React.ReactElement;
}

export default interface IAccordionBody
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof IAccordionBodyProps>,
    IAccordionBodyProps {}
