import { GridImage } from ".";
import mockShow from "./mock";

export default {
  title: "GridImage",
  component: GridImage,
  args: mockShow,
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
