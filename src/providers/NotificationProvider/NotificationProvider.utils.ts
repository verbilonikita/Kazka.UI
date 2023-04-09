import { createContext } from "react";
import { INotification } from "../../components/Notification/Notification.types";

export interface INotificationProviderContext {
  notifications: INotification[];
  addNotification: (newNotification: INotification) => void;
  removeNotification: (key: string) => void;
}

export const NotificationProviderContext =
  createContext<INotificationProviderContext | null>(null);
