import type { Meta, StoryObj } from "@storybook/react";
// components
import Avatar from "./Avatar";
// dto
import { IAvatarProps } from "./Avatar.types";

const meta = {
  title: "Basic/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const AvatarStoryUI: React.FC<IAvatarProps> = (props) => {
  return <Avatar {...props} />;
};

export const AvatarUI: Story = {
  render: (args: IAvatarProps) => <AvatarStoryUI {...args} />,
  args: {
    size: "md",
  },
};
