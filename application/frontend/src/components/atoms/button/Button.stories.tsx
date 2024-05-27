import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import React from 'react';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
    title: "./components/atoms/button/button.tsx",
  component: Button,
  parameters: {
      layout: "centered",

  },
  tags:["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  args: {
    children: "Button",
    colorScheme: "primary",
    isDisabled: false,
    radius : "sm",
    fontColor: "white",
    fontSize: "sm",
   
  },

    //👇 The args you need here will depend on your component
}
