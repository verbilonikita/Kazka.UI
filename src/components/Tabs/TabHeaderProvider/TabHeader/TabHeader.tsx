import React, { useContext } from "react";
// components
import Button from "../../../Button/Button";
// hooks
import useClass from "../../../../hooks/useClass";
// types
import { TabContext } from "../../TabProvider.types";
// styles
import styles from "./TabHeader.module.scss";
import { ITabHeader } from "./TabHeader.types";

const TabHeader: React.FC<ITabHeader> = ({
  children,
  handleClick,
  tabIndex,
}) => {
  const { fullWidth, tabShown, variant } = useContext(TabContext);

  const tabClasses = useClass({
    [styles["kazka-tabs-header_button"]]: true,
    [styles["kazka-tabs-header_button-fw"]]: fullWidth,
    [styles[`kazka-tabs-header_button-v-${variant}-active`]]:
      tabShown === tabIndex,
    [styles[`kazka-tabs-header_button-v-${variant}-inactive`]]:
      tabShown !== tabIndex,
  });

  return (
    <Button className={tabClasses} tabIndex={1} onClick={handleClick}>
      {children}
    </Button>
  );
};
export default React.memo(TabHeader);
