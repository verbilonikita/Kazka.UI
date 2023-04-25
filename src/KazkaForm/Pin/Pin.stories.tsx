import type { Meta, StoryObj } from "@storybook/react";
import KazkaForm from "../../providers/KazkaForm/KazkaForm";
import Pin from "./Pin/Pin";
import PinProvider from "./PinProvider";
import IPinProvider from "./PinProvider.types";

const meta = {
  title: "Form/Pin",
  component: PinProvider,
  args: {
    gap: "1rem",
    size: "md",
    num: 4,
  },
} satisfies Meta<typeof PinProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PinUI: Story = {
  render: (args: Partial<IPinProvider>) => {
    const onSubmit = (values: any) => {
      console.log(values);
    };
    const onChange = (value: string) => {
      console.log(value);
    };

    return (
      <KazkaForm onSubmit={onSubmit}>
        <PinProvider {...args} onChange={onChange}>
          <Pin>blabla</Pin>
          <Pin>blabla</Pin>
        </PinProvider>
      </KazkaForm>
    );
  },
};
