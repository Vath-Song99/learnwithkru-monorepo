import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta: Meta<typeof Select> = {
  title: "components/atoms/select/select.tsx",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const FirstStory: Story = {
  args: {
    className: "",
    borderColor: "primary",
    borderSize: "sm",
    paddingX: "sm",
    paddingY: "sm",
    borderRadius: "sm",
  },
};
