import type { Meta, StoryObj } from "@storybook/react";
import VStack from "./VStack";
import HStack from "./HStack";
import Text from "../Typography/Text/Text";
import { IStack } from "./Stack-DTO";

const meta = {
  title: "Basic/Stack",
  component: VStack,
  args: {
    gap: 10,
    align: "center",
    p: "2",
    justify: "center",
  },
} satisfies Meta<typeof VStack>;

export default meta;
type Story = StoryObj<typeof meta>;

const ShowText = () => {
  return (
    <>
      <Text>First stack.</Text>
      <Text>Second stack.</Text>
    </>
  );
};

export const VStackUI: Story = {
  render: (args: IStack) => {
    return (
      <VStack {...args}>
        <ShowText />
      </VStack>
    );
  },
};

export const HStackUI: Story = {
  render: (args: IStack) => {
    return (
      <HStack {...args}>
        <ShowText />
      </HStack>
    );
  },
};
