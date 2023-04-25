import React from "react";
import { motion } from "framer-motion";
import { EnumKazkaSizes } from "../../../../types/Common.types";
import { useContext } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import useClass from "../../../../hooks/useClass";
import { AccordionContext } from "../../AccordionContext";

interface IAccordionHeaderIcon {
  textSize: keyof typeof EnumKazkaSizes;
}

const AccordionHeaderIcon: React.FC<IAccordionHeaderIcon> = ({
  textSize = "md",
}) => {
  const ContextValue = useContext(AccordionContext);
  const iconClassName = useClass({
    [`font-${textSize}`]: textSize,
  });
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={ContextValue?.open ? { rotate: "180deg" } : { rotate: "0deg" }}
    >
      <AiOutlineArrowDown display="block" className={iconClassName} />
    </motion.div>
  );
};

export default React.memo(AccordionHeaderIcon);
