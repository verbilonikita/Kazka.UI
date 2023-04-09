import useClass from "../../hooks/useClass";
import { IStack } from "./Stack-DTO";

import styles from "./Stack.module.scss";

const VStack: React.FC<IStack> = ({
  children,
  gap,
  justify,
  align,
  className,
  ...props
}) => {
  const classNames = useClass({
    [styles["stack"]]: true,
    [styles["stack-v"]]: true,
  });

  return (
    <div
      className={classNames}
      style={{ gap, justifyContent: justify, alignItems: align }}
      {...props}
    >
      {children}
    </div>
  );
};

export default VStack;
