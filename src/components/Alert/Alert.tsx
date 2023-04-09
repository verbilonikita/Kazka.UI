import React from "react";
import useClass from "../../hooks/useClass";
import { AiFillExclamationCircle } from "react-icons/ai";
// components
import Text from "../Typography/Text/Text";
// types
import { IAlert } from "./Alert.types";
// styles
import styles from "./Alert.module.scss";
import VStack from "../Stack/VStack";
import HStack from "../Stack/HStack";

const Alert: React.FC<IAlert> = ({
  title,
  message,
  size = "md",
  type = "info",
}) => {
  const alertClasses = useClass({
    [styles["kazka-alert"]]: true,
    [styles[`kazka-alert-${type}`]]: true,
  });

  const iconClasses = useClass({
    [styles["kazka-alert_main_icon"]]: true,
    [styles[`kazka-alert_main_icon-${type}`]]: true,
    [styles[`kazka-${size}`]]: true,
  });

  const titleClassName = useClass({
    [styles["kazka-alert_main_title"]]: true,
    [styles[`kazka-alert_main_title-${type}`]]: true,
  });

  const textClassName = useClass({
    [styles["kazka-alert_main_text"]]: true,
    [styles[`kazka-alert_main_text-${type}`]]: true,
  });

  return (
    <HStack className={alertClasses}>
      <div>
        <AiFillExclamationCircle className={iconClasses} />
      </div>
      <VStack>
        {title && (
          <Text size={size} className={titleClassName}>{`${title}`}</Text>
        )}
        <Text size={size} className={textClassName}>
          {message}
        </Text>
      </VStack>
    </HStack>
  );
};

export default React.memo(Alert);
