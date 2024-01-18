import { Frame } from "vibe-storybook-components";
import SpacingComponent from "./spacing-component/spacing-component";
import "./spacing-size.css";

export const SpacingSizes = () => (
  <Frame className="flex flex-wrap gap-y-5 gap-x-2  ">
    <SpacingComponent
      title="XXS"
      sizeInPx="4px"
      spacingVariableName="spacing-xxs"
    />

    <SpacingComponent
      title="XS"
      sizeInPx="8px"
      spacingVariableName="spacing-xs"
    />
    <SpacingComponent
      title="SM"
      sizeInPx="16px"
      spacingVariableName="spacing-sm"
    />
    <SpacingComponent
      title="MD"
      sizeInPx="24px"
      spacingVariableName="spacing-md"
    />
    <SpacingComponent
      title="LG"
      sizeInPx="32px"
      spacingVariableName="spacing-lg"
    />
    <SpacingComponent
      title="XL"
      sizeInPx="40px"
      spacingVariableName="spacing-xl"
    />
    <SpacingComponent
      title="2XL"
      sizeInPx="48px"
      spacingVariableName="spacing-2xl"
    />
    <SpacingComponent
      title="3XL"
      sizeInPx="54px"
      spacingVariableName="spacing-3xl"
    />

    <SpacingComponent
      title="4XL"
      sizeInPx="60px"
      spacingVariableName="spacing-4xl"
    />
  </Frame>
);
