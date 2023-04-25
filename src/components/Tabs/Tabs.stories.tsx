import type { Meta, StoryObj } from "@storybook/react";
import TabProvider from "./TabProvider";
import TabHeaderProvider from "./TabHeaderProvider/TabHeaderProvider";
import TabMainProvider from "./TabMainProvider/TabMainProvider";
import { ITabsProps } from "./TabProvider.types";
import TabHeader from "./TabHeaderProvider/TabHeader/TabHeader";
import TabMain from "./TabMainProvider/TabMain/TabMain";

const meta = {
  title: "Basic/Tabs",
  args: {
    variant: "outline",
    fullWidth: true,
    initTab: 1,
    onChange: (click) => {
      console.log(click);
    },
  },
} satisfies Meta<typeof TabProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsUI: Story = {
  render: (args: ITabsProps) => {
    return (
      <TabProvider {...args}>
        <TabHeaderProvider>
          <TabHeader>Blabla</TabHeader>
          <TabHeader>Blabla</TabHeader>
        </TabHeaderProvider>
        <TabMainProvider>
          <TabMain>blabla</TabMain>
          <TabMain>blublu</TabMain>
        </TabMainProvider>
      </TabProvider>
    );
  },
};
