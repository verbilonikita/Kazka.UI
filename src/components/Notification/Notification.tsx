import React, { useContext, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
// utils
import { KazkaProviderContext } from "../../providers/KazkaProvider/KazkaProvider.utils";
import { getNotificationAnimation } from "./Notification.utils";
// types
import { INotification } from "./Notification.types";
// components
import HStack from "../Stack/HStack";
import VStack from "../Stack/VStack";
// framer
import { motion } from "framer-motion";
// hooks
import useClass from "../../hooks/useClass";
// components
import Text from "../Typography/Text/Text";
// contexts
import {
  INotificationProviderContext,
  NotificationProviderContext,
} from "../../providers/NotificationProvider/NotificationProvider.utils";
// styles
import styles from "./Notification.module.scss";

const Notification: React.FC<INotification> = ({
  vertical = "top",
  horizontal = "right",
  icon,
  size = "sm",
  isClosable = false,
  className,
  closingTimer = 3000,
  title,
  notificationId,
  ...rest
}) => {
  const { removeNotification } = useContext(
    NotificationProviderContext
  ) as INotificationProviderContext;

  const [animation, setAnimation] = useState(() =>
    getNotificationAnimation(vertical, horizontal)
  );

  const NotificationClassName = useClass({
    [styles["kazka-notification"]]: true,
    [styles[`kazka-notification-v-${vertical}`]]: vertical,
    [styles[`kazka-notification-h-${horizontal}`]]: true,
  });

  const iconClassName = useClass({
    [`kazka-${size}`]: true,
  });

  useEffect(() => {
    setTimeout(
      () => removeNotification(notificationId as string),
      closingTimer
    );
  }, []);

  return (
    <motion.div {...animation} exit={{ opacity: 0 }}>
      <HStack {...rest} className={NotificationClassName}>
        <div>{icon}</div>
        <VStack>
          <Text size={size}>Blublu</Text>
          <Text size={size}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            eveniet tempore iure natus maiores possimus. Magnam itaque
            voluptatibus, perferendis sequi fugit perspiciatis amet. Facilis
            quidem harum officiis? Iure, repellendus blanditiis.
          </Text>
        </VStack>
      </HStack>
    </motion.div>
  );
};

export default React.memo(Notification);
