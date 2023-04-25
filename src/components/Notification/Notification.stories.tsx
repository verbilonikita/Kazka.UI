import type { Meta, StoryObj } from "@storybook/react";
import Notification from "./Notification";
import useNotification from "../../hooks/useNotification";
import Button from "../Button/Button";
import NotificationProvider from "../../providers/NotificationProvider/NotificationProvider";

const meta = {
  title: "Basic/Notification",
  component: Notification,
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

const DividerFC = () => {
  const addNotification = useNotification();

  const handleClick = () => {
    addNotification({
      title: "bla",
      closingTimer: 5000,
    });
  };
  return <Button onClick={handleClick}>Click to open notification</Button>;
};

export const DividerUI: Story = {
  render: () => {
    return (
      <div style={{ height: "20rem" }}>
        <NotificationProvider>
          <DividerFC />
        </NotificationProvider>
      </div>
    );
  },
};
