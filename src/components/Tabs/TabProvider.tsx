import { useEffect, useState } from "react";
import { ITabsProvider, TabContext } from "./TabProvider.types";
import VStack from "../Stack/VStack";

const TabProvider: React.FC<ITabsProvider> = ({
  children,
  fullWidth = false,
  initTab = 0,
  variant = "underline",
  onChange,
}) => {
  const [tabShown, setTabShown] = useState<number>(initTab);
  const changeTab = (i: number) => setTabShown(i);

  const ContextValue = {
    changeTab,
    tabShown,
    fullWidth,
    variant,
  };

  useEffect(() => {
    onChange && onChange(tabShown);
  }, [tabShown]);

  return (
    <TabContext.Provider value={ContextValue}>
      <VStack gap={0}>
        {children?.[0]}
        {children?.[1]}
      </VStack>
    </TabContext.Provider>
  );
};

export default TabProvider;
