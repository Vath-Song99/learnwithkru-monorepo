import type { Meta, StoryObj } from "@storybook/react";
import { InputForm } from "./inputform";

const meta: Meta<typeof InputForm> = {
    title: "components/atoms/input/InputForm.tsx",
    component: InputForm,
    parameters: {
        layout: "centered",
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/ij4jlwjEniD1K69xLpaSt0/KRU-UI?node-id=3414-4437&t=F8NlMt5fanGHi8bf-0&scaling=min-zoom&page-id=3414%3A4436",
        }
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