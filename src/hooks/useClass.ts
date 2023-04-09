import { useMemo } from "react";

interface KazkaClass {
  [key: string]: boolean | undefined | null | string;
}

const useClass = (classes: KazkaClass): string => {
  const dependencies = Object.values(classes);
  return useMemo(
    () =>
      Object.entries(classes).reduce((accum, classEntry) => {
        const className = classEntry[0];
        const isClassActive = classEntry[1];
        if (className !== "undefined" && isClassActive) {
          accum += `${classEntry[0]} `;
        }
        return accum;
      }, "") as string,
    [...dependencies]
  );
};

export default useClass;
