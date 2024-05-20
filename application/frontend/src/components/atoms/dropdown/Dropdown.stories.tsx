import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './dropdown'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Dropdown> = {
  title: "./components/atoms/dropdown/dropdown.tsx",
  component: Dropdown,
  parameters: {
    layout: "centered",

  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const FirstStory: Story = {
  args: {

  },

  //👇 The args you need here will depend on your component
}
