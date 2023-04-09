import React, { LegacyRef, RefObject, useState } from "react";
// styles
import "./Pin.scss";

interface IPin {
  size?: string;
  onChange: (value: string, position: number, add: boolean) => void;
  position: number;
  currRef?: RefObject<unknown>;
  changeFocus: any;
}

const Pin: React.FC<IPin> = ({
  size = "md",
  onChange,
  position,
  currRef,
  changeFocus,
}) => {
  const [currentValue, setCurrentValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lastChar = value.charAt(value.length - 1);
    setCurrentValue(lastChar);
    onChange(lastChar, position, true);
  };

  const onBackSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const backspace = e.code === "Backspace";
    const value = (e.target as HTMLInputElement).value;
    if (backspace && !value) {
      changeFocus(position);
    }
  };

  return (
    <input
      ref={currRef as unknown as LegacyRef<HTMLInputElement> | undefined}
      className={`kazka-size-${size} pin pin-${size}`}
      // type="password"
      onChange={handleChange}
      onKeyDown={onBackSpace}
      value={currentValue}
    />
  );
};

export default React.memo(Pin);
