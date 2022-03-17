import { GoTop } from ".";

export default {
  title: "GoTop",
  component: GoTop,
};

export const Template = (args) => {
  return (
    <div style={{ height: "400vh" }}>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        impedit laudantium officiis illum! Nemo ab, temporibus culpa voluptate
        rerum blanditiis! Repudiandae suscipit molestiae mollitia alias
        cupiditate non maiores temporibus ratione.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        impedit laudantium officiis illum! Nemo ab, temporibus culpa voluptate
        rerum blanditiis! Repudiandae suscipit molestiae mollitia alias
        cupiditate non maiores temporibus ratione.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        impedit laudantium officiis illum! Nemo ab, temporibus culpa voluptate
        rerum blanditiis! Repudiandae suscipit molestiae mollitia alias
        cupiditate non maiores temporibus ratione.
      </p>
      <GoTop {...args} />
    </div>
  );
};
