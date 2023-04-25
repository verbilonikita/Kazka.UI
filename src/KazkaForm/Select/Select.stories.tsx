import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import ISelect from "./Select.types";
import Option from "./Option/Option";
import KazkaForm from "../../providers/KazkaForm/KazkaForm";

const meta = {
  title: "Form/Select",
  component: Select,
  args: {
    size: "md",
    placeholder: "bla",
    name: "select",
    required: true,
    p: 10,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectUI: Story = {
  render: (args: Partial<ISelect>) => {
    const onSubmit = (values: any) => {
      console.log(values);
    };

    return (
      <KazkaForm onSubmit={onSubmit}>
        <Select {...args} name="bla" required={args.required as boolean}>
          <Option defaultValue value="Дефолтное значение" key="bla">
            Дефолтное значение
          </Option>
          <Option value="bla" key="blu">
            blabla
          </Option>
          <Option value="gov" key="bli">
            blublu
          </Option>
        </Select>
      </KazkaForm>
    );
  },
};
