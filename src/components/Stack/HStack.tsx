import { IStack } from "./Stack-DTO";

import useClass from "../../hooks/useClass";
// styles
import styles from "./Stack.module.scss";

const HStack: React.FC<IStack> = ({
  children,
  gap,
  justify,
  align,
  style,
  className = "",
  ...props
}) => {
  const classNames = useClass(
    {
      [styles["stack"]]: true,
      [styles["stack-h"]]: true,
      [className]: className,
    },
    [className]
  );

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
