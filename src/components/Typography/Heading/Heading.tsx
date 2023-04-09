import React from "react";
import useClass from "../../../hooks/useClass";

import styles from "./Heading.module.scss";

interface IHeader {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string | React.ReactElement;
  size: string;
  pb?: string;
}

const Heading: React.FC<IHeader> = ({ type = "h3", children, size = "md" }) => {
  const inputClasses = useClass({
    [styles["kazka-header"]]: true,
    [styles[`kazka-header-${size}`]]: true,
  });

  return React.createElement(type, {
    className: inputClasses,
    children,
  });
};

export default Heading;
