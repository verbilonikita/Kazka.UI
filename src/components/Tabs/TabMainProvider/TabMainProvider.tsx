import React, { useContext, useMemo } from "react";
import useClass from "../../../hooks/useClass";
import { TabContext } from "../TabProvider.types";
import { ITabMainProvider } from "./TabMainProvider.types";

// styles
import styles from "./TabMainProvider.module.scss";

const TabMainProvider: React.FC<ITabMainProvider> = ({
  children,
  gap = false,
}) => {
  const { tabShown } = useContext(TabContext);

  const currentScreen = useMemo(
    () => children?.find((_, i) => i === tabShown),
    [tabShown]
  );

  const className = useClass({
    [styles["kazka-tabs-main_provider"]]: gap,
  });

  return <div className={className}>{currentScreen}</div>;
};

export default React.memo(TabMainProvider);
