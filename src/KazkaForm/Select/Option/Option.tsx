import React from "react";

// styles
import "./Kazka-Option.scss";

interface IOption {
  children: React.ReactElement | string;
  value: string;
  setValue?: (name: string, value: string) => void;
  id: string;
  name?: string;
  validate?: boolean;
  size?: string;
}

const Option: React.FC<IOption> = ({
  children,
  value,
  setValue,
  id,
  name,
  size,
}) => {
  const handleClick = () => {
    if (setValue && name) setValue(name, value);
  };
  return (
    <div
      className={`kazka-option kazka-size-${size}`}
      onClick={handleClick}
      key={id}
      id={id}
    >
      {children}
    </div>
  );
};

export default React.memo(Option);
