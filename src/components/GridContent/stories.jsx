import { GridContent } from ".";
import mockShow from "./mock";

export default {
  title: "GridContent",
  component: GridContent,
  args: mockShow,
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
