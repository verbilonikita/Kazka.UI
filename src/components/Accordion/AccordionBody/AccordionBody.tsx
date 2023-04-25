import { cloneElement, useContext, useMemo } from "react";
// motion
import { AnimatePresence, motion } from "framer-motion";
import {
  animateAccordionBody,
  animateAccordionBodyText,
} from "./AccordionBody.animation";
// provider
import { AccordionContext } from "../AccordionContext";
// types
import IAccordionBody from "./AccordionBody.types";
// styles
import styles from "./AccordionBody.module.scss";

const AccordionBody: React.FC<IAccordionBody> = ({ children, size }) => {
  const ContextValue = useContext(AccordionContext);

  const body = useMemo(() => {
    return cloneElement(children, {
      size: size || ContextValue?.size,
    });
  }, [size, ContextValue?.size]);

  return (
    <AnimatePresence>
      {ContextValue?.isAccordionOpen && (
        <motion.div className={styles["acc_b"]} {...animateAccordionBody}>
          <motion.div {...animateAccordionBodyText}>{body}</motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionBody;
