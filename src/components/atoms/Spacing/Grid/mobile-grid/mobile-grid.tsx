const MobileGrid = () => {
  return (
    <div className=" border-2 border-gray-dark-tertiary max-w-screen-mobile h-[743px] pt-4 pb-4 rounded-3xl flex gap-4 justify-between">
      <div className=" flex  w-mobile-column flex-grow bg-primary-lighter opacity-25"></div>
      <div className=" flex  w-mobile-column flex-grow bg-primary-lighter opacity-25"></div>
      <div className=" flex  w-mobile-column flex-grow bg-primary-lighter opacity-25"></div>
      <div className=" flex  w-mobile-column flex-grow bg-primary-lighter opacity-25"></div>
    </div>
  );
};

export default MobileGrid;
