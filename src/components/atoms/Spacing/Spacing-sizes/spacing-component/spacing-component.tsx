import React from "react";
import cx from "classnames";

import "./spacing-component.css";

export type SpacingComponentProps = {
  title: string;
  sizeInPx: string;
  spacingVariableName: string;
};

const SpacingComponent = ({
  title,
  sizeInPx,
  spacingVariableName,
}: SpacingComponentProps) => {
  return (
    <div className="spacing-component">
      <div
        className={cx(spacingVariableName, "spacing-component-visualizer")}
      />
      <div className="spacing-description">
        <div className="spacing-title-container">
          <span className="spacing-title">{title}</span>{" "}
          <span className="spacing-title">{sizeInPx}</span>
        </div>
        <span className="spacing-variable-name">{`var(--${spacingVariableName})`}</span>
      </div>
    </div>
  );
};

export default SpacingComponent;
