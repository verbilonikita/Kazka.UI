import { IStack } from "./Stack-DTO";

import clkz from "../../hooks/useClass";
import styles from "./Stack.module.scss";

const HStack: React.FC<IStack> = ({
  children,
  gap,
  justify,
  align,
  style,
  className,
  ...props
}) => {
  const classNames = clkz({
    [styles["stack"]]: true,
    [styles["stack-h"]]: true,
    [className as string]: Boolean(className),
  });

  return (
    <div
      className={classNames}
      style={{
        gap,
        justifyContent: justify,
        alignItems: align,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default HStack;
