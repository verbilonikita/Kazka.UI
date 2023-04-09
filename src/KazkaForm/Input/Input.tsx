import React from "react";
import clkz from "../../hooks/useClass";
import { IInput } from "./Input-DTO";
// styles
import styles from "./Kazka-Input.module.scss";

const Input: React.FC<IInput> = React.forwardRef(
  (
    {
      className,
      size = "sm",
      placeholder,
      name,
      isInvalid,
      required,
      id,
      type = "text",
      ...props
    },
    ref
  ) => {
    const classNames = clkz({
      [styles["kazka-input"]]: true,
      [styles[`kazka-input-${size}`]]: true,
      [styles[`kazka-input-error`]]: isInvalid,
    });

    return (
      <input
        {...props}
        type={type}
        ref={ref}
        id={id}
        name={name}
        required={required}
        className={classNames}
        placeholder={placeholder}
      />
    );
  }
);

export default React.memo(Input);
