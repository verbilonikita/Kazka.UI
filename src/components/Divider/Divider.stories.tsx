import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";
import { IDividerProps } from "./Divider.types";

const meta = {
  title: "Basic/Divider",
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DividerUI: Story = {
  render: (args: IDividerProps) => <Divider {...args} />,
};
