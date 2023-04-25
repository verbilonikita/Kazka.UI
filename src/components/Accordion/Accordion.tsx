import { useContext, useEffect, useId, memo } from "react";
// hooks
import useClass from "../../hooks/useClass";
// contexts
import {
  AccordionProviderContext,
  IAccordionProviderContext,
} from "../../providers/AccordionProvider/AccordionProviderContext";
import { AccordionContext } from "./AccordionContext";
// types
import IAccordion from "./Accordion.types";
// styles
import styles from "./Accordion.module.scss";

const Accordion: React.FC<IAccordion> = ({
  children,
  size = "md",
  open = false,
  className = "",
  variant = "border",
  isClosable = true,
  ...rest
}) => {
  const accordionId = useId();

  const AccordionProviderValue = useContext(
    AccordionProviderContext
  ) as IAccordionProviderContext;

  const AccordionContextValue = {
    accordionId,
    isAccordionOpen:
      AccordionProviderValue?.accordionList.includes(accordionId),
    updateAccordionList: AccordionProviderValue.updateAccordionList,
    size: AccordionProviderValue?.size || size,
    isClosable,
  };

  const accordionClasses = useClass(
    {
      [styles["acc"]]: true,
      [styles[`acc-${variant}`]]: variant,
      [className]: className,
    },
    [variant]
  );

  useEffect(() => {
    if (open) {
      AccordionProviderValue.updateAccordionList(accordionId);
    }
  }, [open]);

  return (
    <AccordionContext.Provider value={AccordionContextValue}>
      <div className={accordionClasses} {...rest}>
        {children?.[0]}
        {children?.[1]}
      </div>
    </AccordionContext.Provider>
  );
};

export default memo(Accordion);
