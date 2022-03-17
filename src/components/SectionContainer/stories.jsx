import { SectionContainer } from ".";

export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>ta maluco da cabess</p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
