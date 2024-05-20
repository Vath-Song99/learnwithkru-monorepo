import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Typography> = {
    title: "components/atoms/typography/Typography.tsx",
  component: Typography ,
  parameters: {
      layout: "centered",
  },
  tags:["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const FirstStory: Story = {
  args: {
      children: "Hello world",
      className: "",
      align: "center",
      fontSize: "base",
      variant: "normal",
      colorscheme:"primary"
  },

    //👇 The args you need here will depend on your component
}
