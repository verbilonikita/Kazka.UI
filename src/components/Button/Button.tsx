import React from "react";
import useClass from "../../hooks/useClass";
import { IButton } from "./Button.types";
// styles
import styles from "./Button.module.scss";

const Button: React.FC<IButton> = ({
  children,
  type = "button",
  variant = "text",
  className = "",
  size = "sm",
  color = "black",
  ...props
}) => {
  const btnClassName = useClass(
    {
      [styles["kazka-button"]]: true,
      [styles[`kazka-button-${size}`]]: size,
      [styles[`kazka-button-${color}`]]: color,
      [styles[`kazka-button-${variant}`]]: variant,
      [className]: className,
    },
    [size, color, variant, className]
  );

  return (
    <button {...props} type={type} className={btnClassName}>
      {children}
    </button>
  );
};

export default React.memo(Button);
