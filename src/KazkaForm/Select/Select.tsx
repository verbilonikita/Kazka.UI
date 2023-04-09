import React, { useEffect, useMemo, useRef } from "react";
import { FiArrowDown } from "react-icons/fi";
import { useFormContext, useFormState, useWatch } from "react-hook-form";
import useToggle from "../../hooks/useToggle";
import clkz from "../../hooks/useClass";

// styles
import "./Kazka-Select.scss";

interface ISelect {
  size?: string;
  placeholder?: string;
  children: React.ReactElement | React.ReactElement[];
  name: string;
  required: boolean;
  p: string | number;
}

const Select: React.FC<ISelect> = ({
  size = "md",
  placeholder,
  children,
  name,
  required,
  p,
}) => {
  const currentValue = useWatch({ name });
  const { errors } = useFormState();
  const { setValue, register } = useFormContext();
  const [openMenu, toggleMenu] = useToggle();
  const inputRef = useRef(null);
  const inputPlaceholder = currentValue || placeholder;
  const selectBox = useRef(null);

  const inputStyle = useMemo(
    () =>
      clkz({
        "kazka-select-input": true,
        "kazka-input-error": true,
      }),
    []
  );

  const options = useMemo(() => {
    const optionLength = ((children as []) || {})?.length;

    if (optionLength) {
      return (children as [])!.map((child: React.ReactElement) => {
        return React.cloneElement(child, {
          size,
          name,
          setValue: setValue,
          key: child.props.id,
        });
      });
    } else {
      return React.cloneElement(children as unknown as React.ReactElement, {
        setValue: setValue,
      });
    }
  }, [children]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const clickTarget = e.target;
      if (
        !(selectBox?.current as unknown as Element)?.contains(
          clickTarget as Node
        )
      ) {
        toggleMenu();
      }
    };

    if (openMenu) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [openMenu, selectBox]);

  return (
    <div className="kazka-select-box" ref={selectBox} onClick={toggleMenu}>
      <div className={inputStyle}>
        <input
          required={required}
          {...register(name, {
            required,
          })}
          ref={inputRef}
          readOnly
          className={`kazka-select kazka-select-${size}`}
          placeholder={inputPlaceholder}
          style={{ padding: p }}
        />
        <div className="kazka-select-right">
          <FiArrowDown className={`kazka-select-${size}`} />
        </div>
      </div>
      {openMenu && (
        <div
          style={{
            top: (inputRef?.current as unknown as Element)?.clientHeight + 5,
          }}
          className="kazka-options"
        >
          {options}
        </div>
      )}
      <div>{errors[name]?.type}</div>
    </div>
  );
};

export default React.memo(Select);
