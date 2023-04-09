import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface INotificationProps {
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "bottom";
  icon?: JSX.Element;
  size?: string;
  isClosable?: boolean;
  closingTimer?: number;
  notificationId?: string;
}

export interface INotification
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      keyof INotificationProps
    >,
    INotificationProps {}
