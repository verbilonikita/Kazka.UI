import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { IButton } from "./Button.types";

const meta = {
  title: "Basic/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonFC: React.FC<IButton> = (props) => {
  return <Button {...props}>Blabla</Button>;
};

export const ButtonUI: Story = {
  render: (args: IButton) => <ButtonFC {...args} />,
};
