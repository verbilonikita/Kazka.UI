import React, { useCallback, useContext, cloneElement, FC } from "react";
// hooks
import useClass from "../../../hooks/useClass";
// components
import HStack from "../../Stack/HStack";
// types
import { TabContext } from "../TabProvider.types";
// styles
import styles from "./TabHeaderProvider.module.scss";
import { ITabMainProvider } from "../TabMainProvider/TabMainProvider.types";

const TabHeaderProvider: FC<ITabMainProvider> = ({ children, ...props }) => {
  const { changeTab, variant } = useContext(TabContext);
  const handleClick = useCallback((i: number) => changeTab(i), []);

  const className = useClass({
    [styles["kazka-tabHeaderProvider"]]: true,
    [styles[`kazka-tabHeaderProvider-v-${variant}`]]: variant === "underline",
  });

  return (
    <HStack {...props} className={className}>
      {children?.map((tab, i) =>
        cloneElement(tab, {
          handleClick: () => handleClick(i),
          tabIndex: i,
          key: i,
        })
      )}
    </HStack>
  );
};

export default React.memo(TabHeaderProvider);
