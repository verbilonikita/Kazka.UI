import React, { createRef, useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import Pin from "./Pin/Pin";

// styles
import "./PinProvider.scss";

interface IPin {
  size: string;
  gap: string | number;
  num?: number;
  onChange: (value: string) => void;
}

const PinProvider: React.FC<IPin> = ({ size, gap, num = 4, onChange }) => {
  const pins = useMemo(() => {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
  }, []);

  const refs = useRef(pins.map((el) => createRef()));

  const [pinState, setPinState] = useState(
    pins.reduce((accum, el) => {
      accum = {
        ...accum,
        [el]: "",
      };
      return accum;
    }, {})
  );

  useEffect(() => {
    const stringifyValue = Object.values(pinState).reduce(
      (accum: string, el) => {
        return accum + el;
      },
      ""
    );
    onChange(stringifyValue);
  }, [pinState]);

  const handleChange = (value: string, position: number) => {
    const nextElement = refs.current[position + 1]?.current as HTMLElement;
    if (nextElement && value) {
      nextElement.focus();
    } else {
      setPinState((state) => {
        return {
          ...state,
          [position]: value,
        };
      });
    }
  };

  const changeFocus = (position: number) => {
    console.log("focuschanged");
    const prevElement = refs.current[position - 1]?.current as HTMLElement;
    if (prevElement) {
      prevElement.focus();
    }
  };

  return (
    <div style={{ gap }} className="pin-provider">
      {pins.map((num) => (
        <Pin
          currRef={refs.current[num]}
          key={num}
          position={num}
          onChange={handleChange}
          changeFocus={changeFocus}
          size={size}
        />
      ))}
    </div>
  );
};

export default React.memo(PinProvider);
