import React, { useRef, useMemo } from "react";
import {
  IKazkaProviderContext,
  KazkaProviderContext,
} from "./KazkaProvider.utils";
// hooks
import useClass from "../../hooks/useClass";
// styles
import "../../css-variables/index.scss";
import "../../Kazka.scss";
import styles from "./KazkaProvider.module.scss";

interface IKazkaProvider {
  children?: React.ReactElement | React.ReactElement[];
}

const KazkaProvider: React.FC<IKazkaProvider> = ({ children }) => {
  const className = useClass({
    [styles["kazka-provider"]]: true,
  });

  const kazkaProviderRef = useRef(null);

  const DefaultKazkaProviderContextValue: IKazkaProviderContext =
    useMemo(() => {
      return {
        theme: "light",
        providerRef: kazkaProviderRef,
      };
    }, [kazkaProviderRef]);

  return (
    <KazkaProviderContext.Provider value={DefaultKazkaProviderContextValue}>
      <div className={className} id="kazka-provider" ref={kazkaProviderRef}>
        {children}
      </div>
    </KazkaProviderContext.Provider>
  );
};

export default React.memo(KazkaProvider);
