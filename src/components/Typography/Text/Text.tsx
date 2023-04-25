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
  value,
  fontWeight,
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
    [`font-${size}`]: true,
    ["remove-m"]: true,
    [className]: true,
    [styles["no-wrap"]]: ellipsis,
  });

  return (
    <p className={textClassName} style={{ textAlign, fontWeight }} {...props}>
      {children || value}
    </p>
  );
};

export default React.memo(Text);
