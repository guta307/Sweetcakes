import { useMemo } from "react";
import { ColorsDescription } from "../colors-description/colors-description";

export const TextColors = () => {
  const colorKeys = useMemo(
    () => [
      { color: "bg-gray-dark-primary", name: "text-gray-dark-primary" },
      { color: "bg-gray-dark-secondary", name: "text-gray-dark-secondary" },
      { color: "bg-gray-dark-tertiary", name: "text-gray-dark-tertiary" },
      { color: "bg-gray-dark-quartenary", name: "text-gray-dark-quartenary" },
      { color: "bg-gray-light-secondary", name: "text-gray-light-secondary" },
      { color: "bg-primary-default", name: "text-primary-default" },
      { color: "bg-primary-lighter", name: "text-primary-lighter" },
      { color: "bg-error-dark", name: "text-error" },
      { color: "bg-success-dark", name: "text-success" },
      { color: "bg-information-dark", name: "text-information" },
    ],
    []
  );
  return <ColorsDescription colorNames={colorKeys} />;
};

export default TextColors;
