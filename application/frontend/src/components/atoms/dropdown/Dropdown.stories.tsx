import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Dropdown> = {
  title: "./components/atoms/dropdown/dropdown.tsx",
  component: Dropdown,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/ij4jlwjEniD1K69xLpaSt0/KRU-UI?node-id=3414-4351&t=F8NlMt5fanGHi8bf-0&scaling=min-zoom&page-id=3412%3A852",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const FirstStory: Story = {
  args: {},

  //👇 The args you need here will depend on your components
};
