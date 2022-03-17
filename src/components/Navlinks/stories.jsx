import { Navlinks } from ".";
import links from "./mock";

export default {
  title: "Navlinks",
  component: Navlinks,
  args: {
    links: links,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Navlinks {...args} />
    </div>
  );
};
