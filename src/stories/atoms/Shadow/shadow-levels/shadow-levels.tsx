import { Frame } from "vibe-storybook-components";

const ShadowLevels = () => {
  return (
    <Frame>
      <div className="flex gap-x-3 flex-wrap gap-y-6 ">
        <div className="flex flex-col-reverse items-center gap-4">
          <p className="text-xs">var(--shadow-ds01)</p>
          <div className=" shadow-ds01 bg-white  rounded-md border-gray-dark-primary w-desktop-6col h-desktop-4col" />
        </div>
        <div className="flex gap-x-3 flex-wrap gap-y-3">
          <div className="flex flex-col-reverse items-center gap-4">
            <p className="text-xs">var(--shadow-ds02)</p>
            <div className=" shadow-ds02 bg-white  rounded-md border-gray-dark-primary w-desktop-6col h-desktop-4col" />
          </div>
        </div>
        <div className="flex gap-x-3 flex-wrap gap-y-3">
          <div className="flex flex-col-reverse items-center gap-4">
            <p className="text-xs">var(--shadow-ds03)</p>
            <div className=" shadow-ds04 bg-white  rounded-md border-gray-dark-primary w-desktop-6col h-desktop-4col" />
          </div>
        </div>
        <div className="flex gap-x-3 flex-wrap gap-y-3">
          <div className="flex flex-col-reverse items-center gap-4">
            <p className="text-xs">var(--shadow-ds04)</p>
            <div className=" shadow-ds04 bg-white  rounded-md border-gray-dark-primary w-desktop-6col h-desktop-4col" />
          </div>
        </div>

        <div className="flex gap-x-3 flex-wrap gap-y-3">
          <div className="flex flex-col-reverse items-center gap-4">
            <p className="text-xs">var(--shadow-ds05)</p>
            <div className=" shadow-ds05 bg-white  rounded-md border-gray-dark-primary w-desktop-6col h-desktop-4col" />
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default ShadowLevels;
