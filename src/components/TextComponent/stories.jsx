import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Quis deleniti at cupiditate quas ad suscipit, tempore accusamus quae vero nemo eum tenetur neque
    modi molestias harum perspiciatis aperiam adipisci voluptatibus.`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
