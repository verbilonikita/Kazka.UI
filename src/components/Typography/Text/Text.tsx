import React, { useMemo } from "react";
import styled from "styled-components";
import useClass from "../../../hooks/useClass";
// types
import IText from "./Text.types";
// styles
import styles from "./Text.module.scss";

const TextWrapper = styled.p.attrs(
  (props: {
    color: string;
    textAlign: string;
    fontWeight?: string | number;
    fontSize?: string | number;
  }) => props
)`
  // background-color: ${(props) => props.color || "blue"};
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize};
`;

const Text: React.FC<IText> = ({
  children,
  ellipsis,
  size = "md",
  className = "",
  value,
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
    [styles["no-wrap"]]: ellipsis,
    [`font-${size}`]: true,
    ["remove-m"]: true,
    [className]: true,
  });

  return (
    <TextWrapper className={textClassName} {...props}>
      {children || value}
    </TextWrapper>
  );
};

export default React.memo(Text);
