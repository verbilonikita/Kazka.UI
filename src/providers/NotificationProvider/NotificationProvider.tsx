import React, { useMemo, useState } from "react";

// framer
import { AnimatePresence } from "framer-motion";
// components
import Notification from "../../components/Notification/Notification";
import { INotificationProps } from "../../components/Notification/Notification.types";
// utils
import {
  INotificationProviderContext,
  NotificationProviderContext,
} from "./NotificationProvider.utils";
import { getRandomKey } from "../../utilities/getRandomKey";
// styles
import styles from "./NotificationProvider.module.scss";

interface INotificationProvider {
  children: JSX.Element[] | JSX.Element;
}

const NotificationProvider: React.FC<INotificationProvider> = ({
  children,
  ...props
}) => {
  const [notifications, setNotifications] = useState<INotificationProps[]>([]);

  const addNotification = (newNotification: INotificationProps) => {
    const key = getRandomKey();
    const updatedNotification = {
      ...newNotification,
      notificationId: key,
    };
    setNotifications((state) => [...state, updatedNotification]);
  };

  const removeNotification = (notificationKey: string) => {
    setNotifications((state) =>
      state.filter(
        (notification) => notification.notificationId !== notificationKey
      )
    );
  };

  const contextValue: INotificationProviderContext = useMemo(() => {
    return {
      notifications,
      addNotification,
      removeNotification,
    };
  }, [notifications]);

  const notificationsElements = useMemo(() => {
    return notifications.map((notificationObject) => {
      return (
        <Notification
          {...notificationObject}
          key={notificationObject.notificationId}
          notificationId={notificationObject.notificationId}
        />
      );
    });
  }, [notifications.length]);

  return (
    <NotificationProviderContext.Provider value={contextValue}>
      <div {...props} className={styles["notification-provider"]}>
        {children}
        <div className={styles["notification-wrapper"]}>
          <div className={styles["notification-list"]}>
            <AnimatePresence>{notificationsElements}</AnimatePresence>
          </div>
        </div>
      </div>
    </NotificationProviderContext.Provider>
  );
};

export default React.memo(NotificationProvider);
