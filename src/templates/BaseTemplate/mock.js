import { GridText } from "../../components/GridText";
import gridMock from "../../components/GridText/mock";

export default {
  links: [
    {
      children: "Link 1",
      link: "#target1",
      newTab: true,
    },
    {
      children: "Link 2",
      link: "#target2",
      newTab: true,
    },
    {
      children: "Link 3",
      link: "#target3",
      newTab: true,
    },
    {
      children: "Link 4",
      link: "#target4",
      newTab: true,
    },
  ],
  logoData: {
    text: "Logo",
    link: "#",
  },
  footerHtml: `<p>Teste de footer</p>`,
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
};
