const ThreeColumnsGrid = () => {
  return (
    <div className="flex gap-4">
      <div className="border-[1px] border-primary-outline flex gap-4 w-desktop-3col h-desktop-3col rounded-[5px]">
        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />
        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />
      </div>
      <div className="border-[1px] border-primary-outline flex gap-4 w-desktop-3col h-desktop-3col rounded-[5px]">
        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />
        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />
      </div>{" "}
      <div className="border-[1px] border-primary-outline flex gap-4 w-desktop-3col h-desktop-3col rounded-[5px]">
        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />
        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />
      </div>
    </div>
  );
};

export default ThreeColumnsGrid;
