import { useState } from "react";

const useToggle = (initial = false): [boolean, () => void] => {
  const [toggle, setToggle] = useState<boolean>(initial);
  const handleToggle = () => setToggle(!toggle);

  return [toggle, handleToggle];
};

export default useToggle;
