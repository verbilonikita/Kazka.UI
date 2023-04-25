import React, { useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFormContext, useFormState, useWatch } from "react-hook-form";
import { FiArrowDown } from "react-icons/fi";
// hooks
import useToggle from "../../hooks/useToggle";
import useClass from "../../hooks/useClass";
// types
import ISelect from "./Select.types";
// styles
import "./Kazka-Select.scss";

const Select: React.FC<ISelect> = ({
  size = "md",
  placeholder,
  onChange,
  children,
  name,
  required,
  p,
  ...props
}) => {
  const currentValue = useWatch({ name });
  const { errors } = useFormState();
  const { setValue, register } = useFormContext();
  const [openMenu, toggleMenu] = useToggle();
  const inputRef = useRef(null);
  const inputPlaceholder = currentValue || placeholder;
  const selectBox = useRef(null);

  const inputStyle = useClass({
    "kazka-select-input": true,
    // "kazka-input-error": true,
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="kazka-select-box" ref={selectBox} onClick={toggleMenu}>
      <div className={inputStyle}>
        <input
          required={required}
          {...register(name, {
            required,
          })}
          onChange={handleChange}
          ref={inputRef}
          readOnly
          className={`kazka-select kazka-select-${size}`}
          placeholder={inputPlaceholder}
          style={{ padding: p }}
          {...props}
        />
        <div className="kazka-select-right">
          <FiArrowDown className={`kazka-select-${size}`} />
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ y: 5, height: "auto" }}
            exit={{ height: 0, padding: 0 }}
            style={{
              top: (inputRef?.current as unknown as Element)?.clientHeight + 5,
            }}
            className="kazka-options"
          >
            {options}
          </motion.div>
        )}
      </AnimatePresence>

      <div>{errors?.[name]?.type}</div>
    </div>
  );
};

export default React.memo(Select);
