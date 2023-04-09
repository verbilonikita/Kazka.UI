import { motion, AnimatePresence } from "framer-motion";

import VStack from "../Stack/VStack";

import useToggle from "../../hooks/useToggle";
import AccordionHeader from "./AccordionHeader/AccordionHeader";

// styles
import styles from "./Accordion.module.scss";
import AccordionBody from "./AccordionBody/AccordionBody";

interface IAccordion {
  children: React.ReactElement[];
  open: boolean;
}

const Accordion: React.FC<IAccordion> = ({ children, open }) => {
  const classNames = `${styles["kazka-accordion"]}`;

  return (
    <div className={classNames}>
      {children[0]}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{ height: 0 }}
          >
            <motion.div
              className={styles["kazka-accordion_body"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
            >
              {children[1]}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
