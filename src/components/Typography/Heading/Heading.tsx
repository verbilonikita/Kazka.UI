import React from "react";
import useClass from "../../../hooks/useClass";
// types
import { IHeading } from "./Heading.types";
// styles
import styles from "./Heading.module.scss";

const Heading: React.FC<IHeading> = ({
  type = "h3",
  children,
  value,
  size = "md",
}) => {
  const inputClasses = useClass({
    [styles["kazka-header"]]: true,
    [styles[`kazka-header-${size}`]]: true,
  });

  return React.createElement(type, {
    className: inputClasses,
    children: children || value,
  });
};

export default React.memo(Heading);
