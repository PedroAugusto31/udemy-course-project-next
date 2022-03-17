import { GridText } from ".";
import mockZaum from "./mock";

export default {
  title: "GridText",
  component: GridText,
  args: mockZaum,
};

export const Template = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
