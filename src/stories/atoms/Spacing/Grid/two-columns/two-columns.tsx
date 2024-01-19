const TwoColumnsGrid = () => {
  return (
    <div className="flex gap-4">
      <div className="relative border-[1px] border-primary-outline align-middle w-desktop-2col h-desktop-2col rounded-[5px] flex gap-4 ">
        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />
        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />
      </div>
      <div className="relative border-[1px] border-primary-outline align-middle w-desktop-2col h-desktop-2col rounded-[5px] flex gap-4 ">
        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />
        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />

        <div className=" w-mobile-column h-full bg-primary-lighter opacity-25" />
      </div>
    </div>
  );
};

export default TwoColumnsGrid;
