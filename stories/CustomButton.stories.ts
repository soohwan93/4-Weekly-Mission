import { CustomButton } from "@/components/storybookTest/CustomButton";
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
const meta = {
  title: "Test/CustomButton",
  component: CustomButton,
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    label: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Button",
  },
};

interface CanvasPlayArgs {
  canvasElement: HTMLCanvasElement;
}

export const ClickTestButton = {
  args: {
    variant: "outline",
    label: "Click!",
  },
  play: async ({ canvasElement }: CanvasPlayArgs) => {
    const canvas = within(canvasElement);
    const primaryButton = await canvas.getByRole("button", {
      name: /Click/i,
    });
    await userEvent.click(primaryButton);
  },
};
