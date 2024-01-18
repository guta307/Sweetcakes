import classNames from "classnames";

import { useMemo } from "react";
import { Frame, ColorDescription } from "vibe-storybook-components";

type ColorKey = {
  color: string;
  name: string;
};

type ColorsDescriptionProps = {
  colorNames: ColorKey[];
};
export const ColorsDescription = ({ colorNames }: ColorsDescriptionProps) => {
  const descriptions = useMemo(
    () =>
      colorNames.map((value) => (
        <div className=" flex items-center gap-5">
          <div
            className={classNames(
              " w-14 rounded-md aspect-square",
              value.color
            )}
          ></div>
          <p className=" text-md font-bold">{value.name}</p>
        </div>
      )),
    [colorNames]
  );
  return <Frame className="flex flex-col gap-4">{descriptions}</Frame>;
};

export default ColorsDescription;
