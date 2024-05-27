import type { Meta, StoryObj } from "@storybook/react";
import { InputForm } from "./inputform";

const meta: Meta<typeof InputForm> = {
    title: "components/atoms/input/InputForm.tsx",
    component: InputForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputForm>

export const FirstStory: Story = {
    args: {
        className: "",
        type: "text",
        placeholder: "exampe@gmail.com",
        borderColor: "primary",
        borderSize: "sm",
        paddingX: "sm",
        paddingY: "sm",
        borderRadius: "sm",

    }
}