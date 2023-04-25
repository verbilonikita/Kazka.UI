import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./Menu";
import { IMenu } from "./Menu.types";

const meta = {
  title: "Basic/Menu",
  component: Menu,
  args: {
    btnText: "Hehe",
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuUI: Story = {
  render: (args: IMenu) => <Menu {...args} />,
};
