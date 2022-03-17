import { SectionBackground } from ".";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          cupiditate eius eveniet accusamus tempora ex? Autem est eveniet
          adipisci quasi natus. Voluptatum sunt ratione nobis architecto alias
          velit sequi temporibus?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
