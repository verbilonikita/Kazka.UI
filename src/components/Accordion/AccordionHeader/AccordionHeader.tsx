import { useContext, useMemo, memo } from "react";
// context
import { AccordionContext } from "../AccordionContext";
// components
import HStack from "../../Stack/HStack";
import AccordionHeaderIcon from "./AccordionHeaderIcon/AccordionHeaderIcon";
import AccordionHeaderTitle from "./AccordionHeaderTitle/AccordionHeaderTitle";
// types
import IAccordionHeader from "./AccordionHeader.types";
// styles
import styles from "./AccordionHeader.module.scss";
import useClass from "../../../hooks/useClass";

/**
 * Accordion component.
 * @param open (boolean).
 */
const AccordionHeader: React.FC<IAccordionHeader> = ({
  ellipsis,
  fontWeight,
  children,
  customTitle,
  customIcon,
  className = "",
  size = "md",
}) => {
  const AccordionContextValue = useContext(AccordionContext);

  const textSize = useMemo(
    () => AccordionContextValue?.size || size,
    [AccordionContextValue?.size, size]
  );

  const handleClick = () => {
    AccordionContextValue?.updateAccordionList(
      AccordionContextValue?.accordionId as string
    );
  };

  const classNames = useClass(
    {
      [styles["acc_h"]]: true,
      [styles["acc_h-active"]]: AccordionContextValue?.isAccordionOpen,
      [className]: className,
    },
    [AccordionContextValue?.isAccordionOpen, className]
  );

  return (
    <HStack className={classNames} onClick={handleClick}>
      {customTitle || (
        <AccordionHeaderTitle
          textSize={textSize}
          ellipsis={ellipsis}
          text={children}
          fontWeight={fontWeight}
        />
      )}

      {customIcon || <AccordionHeaderIcon textSize={textSize} />}
    </HStack>
  );
};

export default memo(AccordionHeader);
