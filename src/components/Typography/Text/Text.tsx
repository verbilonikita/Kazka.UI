import React, { useMemo } from "react";
import useClass from "../../../hooks/useClass";
import IText from "./Text-DTO";
// styles
import styles from "./Text.module.scss";

const Text: React.FC<IText> = ({
  children,
  ellipsis,
  size = "md",
  textAlign,
  className = "",
  ...props
}) => {
  const overflow = useMemo(() => {
    if (ellipsis) {
      return {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      };
    } else {
      return null;
    }
  }, [ellipsis]);

  const textClassName = useClass({
    [`kazka-${size}`]: true,
    ["remove-m"]: true,
  });

  return (
    <p
      className={`${textClassName}${className ? className : ""}`}
      style={{ textAlign }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
