import { useEffect, useState } from "react";

interface KazkaClass {
  [key: string]: boolean | undefined | null | string;
}

const makeStringOfClasses = (classes: KazkaClass) => {
  return Object.entries(classes).reduce((accum, classEntry) => {
    const className = classEntry[0];
    const isClassActive = classEntry[1];
    if (className !== "undefined" && isClassActive) {
      accum += `${classEntry[0]} `;
    }
    return accum;
  }, "") as unknown as string;
};

const useClass = (classes: KazkaClass, dependencies: any[] = []): string => {
  const [allClasses, setClasses] = useState<string>(() =>
    makeStringOfClasses(classes)
  );
  useEffect(() => {
    setClasses(() => makeStringOfClasses(classes));
  }, [...dependencies]);

  return allClasses.trim();
};

export default useClass;
