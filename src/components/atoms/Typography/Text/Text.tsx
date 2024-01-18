import { Frame } from "vibe-storybook-components";
import TextTable from "./TextTable/TextTable";
import {
  bodyData,
  displayData,
  headingData,
  labelData,
  paragraphData,
} from "./TextData/TextData";

const TextBoard = () => {
  return (
    <div className="w-screen flex flex-col gap-5">
      <h2 className=" text-lg">Display</h2>
      <TextTable rows={displayData} />

      <h2 className=" text-lg">Heading</h2>
      <TextTable rows={headingData} />

      <h2 className=" text-lg">Body</h2>
      <TextTable rows={bodyData} />

      <h2 className=" text-lg">Paragraph</h2>
      <TextTable rows={paragraphData} />

      <h2 className=" text-lg">Label</h2>
      <TextTable rows={labelData} />
    </div>
  );
};

export default TextBoard;
