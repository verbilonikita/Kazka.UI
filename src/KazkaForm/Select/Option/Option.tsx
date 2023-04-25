import React from "react";

import useClass from "../../../hooks/useClass";
import IOption from "./Option.types";

// styles
import styles from "./Option.module.scss";

const Option: React.FC<IOption> = ({
  children,
  value,
  defaultValue = false,
  className = "",
  setValue,
  name,
  size,
  ...rest
}) => {
  const handleClick = () => {
    if (setValue && name) setValue(name, value);
  };

  const classes = useClass(
    {
      [styles["kazka-option"]]: true,
      [styles[`kazka-size-${size}`]]: size,
      [className]: className,
    },
    [size]
  );

  return (
    <div {...rest} className={classes} onClick={handleClick}>
      {children}
    </div>
  );
};

export default React.memo(Option);
