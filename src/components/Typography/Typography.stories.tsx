import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading/Heading";
import Text from "./Text/Text";
import { IHeading } from "./Heading/Heading.types";
import IText from "./Text/Text.types";

const meta = {
  title: "Basic/Typography",
  args: {
    children: "Hehe",
  },
} satisfies Meta<typeof Heading | typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingUI: Story = {
  render: (args: Partial<IHeading>) => (
    <Heading {...args}>{args.children as string}</Heading>
  ),
};

export const TextUI: Story = {
  render: (args: Partial<IText>) => (
    <Text {...args}>{args.children as string}</Text>
  ),
};
