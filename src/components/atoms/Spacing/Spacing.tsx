const BoxClassMap = {
  xl: "w-desktop-2col h-desktop-2col rounded-[5px]",
  lg: "w-desktop-3col h-desktop-3col rounded-[5px]",
  md: "w-desktop-4col h-desktop-4col rounded-[5px]",
  sm: "w-desktop-6col h-desktop-6col rounded-[5px]",
  xs: "w-mobile-column h-screen",
};

export type SpacingProps = {
  size?: "xl" | "lg" | "md" | "sm" | "xs";
};

const Spacing = ({ size = "md" }: SpacingProps) => {
  const classes = [BoxClassMap[size]];
  return (
    <div
      className={`border-[1px] border-primary-outline flex gap-[11px] ${classes}`}
    ></div>
  );
};

export default Spacing;
