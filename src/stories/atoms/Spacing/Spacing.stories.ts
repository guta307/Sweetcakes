import { Meta, StoryObj } from "@storybook/react";

import Spacing, { SpacingProps } from "./Spacing";

const meta: Meta<SpacingProps> = {
  title: "Atoms/Spacing",
  component: Spacing,
  argTypes: {
    size: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<SpacingProps> = {
  args: {},
};

export const Default: StoryObj<SpacingProps> = {
  args: {},
};

export const Secondary: StoryObj<SpacingProps> = {
  args: {
    size: "xl",
  },
};

export const Terciary: StoryObj<SpacingProps> = {
  args: {
    size: "lg",
  },
};

export const Quartenary: StoryObj<SpacingProps> = {
  args: {
    size: "sm",
  },
};

export const Quintenary: StoryObj<SpacingProps> = {
  args: {
    size: "xs",
  },
};
