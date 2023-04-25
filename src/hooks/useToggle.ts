import { useState } from "react";

/**
 * Function to toggle boolean.
 * @param (initial: boolean) - initial value (false by default).
 * @returns [toggle: bool, handleToggle: func]
 */

const useToggle = (initial = false): [boolean, () => void] => {
  const [toggle, setToggle] = useState<boolean>(initial);
  const handleToggle = () => setToggle(!toggle);

  return [toggle, handleToggle];
};

export default useToggle;
