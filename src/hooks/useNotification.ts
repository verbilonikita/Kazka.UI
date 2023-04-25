import { useContext } from "react";
// utils
import { INotification } from "../components/Notification/Notification.types";
// contexts
import {
  INotificationProviderContext,
  NotificationProviderContext,
} from "../providers/NotificationProvider/NotificationProvider.utils";

/**
 *
 * Hook to control notifications list.
 * @returns function that accepts Notification props e.g. title, size.
 */

const useNotification = () => {
  const { addNotification } = useContext(
    NotificationProviderContext
  ) as INotificationProviderContext;

  const openNotification = (notificationProps: INotification) => {
    addNotification(notificationProps);
  };

  return openNotification;
};

export default useNotification;
