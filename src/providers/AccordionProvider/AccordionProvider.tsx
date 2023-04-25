import { useMemo, memo, useState } from "react";
// components
import VStack from "../../components/Stack/VStack";
// hooks
import useClass from "../../hooks/useClass";
// types
import { IAccordionProvider } from "./AccordionProvider.types";
// context
import { AccordionProviderContext } from "./AccordionProviderContext";
// styles
import styles from "./AccordionProvider.module.scss";

const AccordionProvider: React.FC<IAccordionProvider> = ({
  children,
  size = "md",
  className = "",
  allowMultiple = false,
  isClosable = true,
  ...rest
}) => {
  const [accordionList, setAccordionList] = useState<string[]>([]);

  const updateAccordionList = (id: string) => {
    if (allowMultiple) {
      if (accordionList.includes(id)) {
        setAccordionList((state) => state.filter((el) => el !== id));
      } else {
        setAccordionList((state) => [...state, id]);
      }
    } else {
      if (accordionList.includes(id)) {
        setAccordionList([]);
      } else {
        setAccordionList([id]);
      }
    }
  };

  const AccordionProviderValue = useMemo(() => {
    return {
      accordionList,
      updateAccordionList,
      size,
      allowMultiple,
    };
  }, [size, allowMultiple, accordionList]);

  const classes = useClass({
    [styles["acc-provider"]]: true,
    [className]: className,
  });

  return (
    <AccordionProviderContext.Provider value={AccordionProviderValue}>
      <VStack className={classes} {...rest} gap="1rem">
        {children}
      </VStack>
    </AccordionProviderContext.Provider>
  );
};

export default memo(AccordionProvider);
