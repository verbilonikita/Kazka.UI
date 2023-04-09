import VStack from "../../Stack/VStack";

import styles from "./AccordionBody.module.scss";

interface IAccordionBody {
  children: React.ReactElement;
}

const AccordionBody: React.FC<IAccordionBody> = ({ children }) => {
  return <>{children}</>;
};

export default AccordionBody;
