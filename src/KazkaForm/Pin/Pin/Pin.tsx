import React, { LegacyRef, useState } from "react";

// types
import IPin from "./Pin.types";

// styles
import "./Pin.scss";
import useClass from "../../../hooks/useClass";

const Pin: React.FC<IPin> = ({
  size = "md",
  onChange,
  className = "",
  position,
  currRef,
  changeFocus,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lastChar = value.charAt(value.length - 1);
    setCurrentValue(lastChar);
    if (onChange) {
      onChange(lastChar, position as number, true);
    }
  };

  const onBackSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const backspace = e.code === "Backspace";
    const value = (e.target as HTMLInputElement).value;
    if (backspace && !value && changeFocus) {
      changeFocus(position);
    }
  };

  const pinClassName = useClass({
    [`pin-${size}`]: size,
    ["pin"]: true,
    [`font-${size}`]: size,
    className: className,
  });

  return (
    <input
      {...props}
      ref={currRef as unknown as LegacyRef<HTMLInputElement> | undefined}
      className={pinClassName}
      // type="password"
      onChange={handleChange}
      onKeyDown={onBackSpace}
      value={currentValue}
    />
  );
};

export default React.memo(Pin);
