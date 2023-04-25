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
import useClass from "../../../hooks/useClass";

const AccordionBody: React.FC<IAccordionBody> = ({
  children,
  className = "",
}) => {
  const ContextValue = useContext(AccordionContext);

  const classes = useClass({
    [styles["acc_b"]]: true,
    [className]: className,
  });

  return (
    <AnimatePresence>
      {ContextValue?.isAccordionOpen && (
        <motion.div className={classes} {...animateAccordionBody}>
          <motion.div {...animateAccordionBodyText}>{children}</motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionBody;
