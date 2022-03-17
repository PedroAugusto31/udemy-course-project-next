import { BaseTemplate } from ".";
import mock from "./mock";

export default {
  title: "BaseTemplate",
  component: BaseTemplate,
  args: mock,
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <BaseTemplate {...args} />
    </div>
  );
};
