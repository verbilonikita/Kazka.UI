import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import { IAlert, IAlertProps } from "./Alert.types";

const meta = {
  title: "Basic/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const AlertFC: React.FC<IAlertProps> = (props) => {
  console.log(props);
  return <Alert {...props} />;
};

export const AlertUI: Story = {
  render: (args: IAlertProps) => <AlertFC {...args} />,
};
