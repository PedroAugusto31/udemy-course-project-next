import * as Styled from "./styles";
import P from "prop-types";
import { BaseTemplate } from "../BaseTemplate";
import { GridTwoColumns } from "../../components/GridTwoColumn";
import { GridContent } from "../../components/GridContent";
import { GridText } from "../../components/GridText";
import { GridImage } from "../../components/GridImage";

export function Home({ data }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, "");
  //   const slug = pathName ? pathName : "landing-page";

  //   const load = async () => {
  //     try {
  //       await new Promise((r) => setTimeout(r, 2500));
  //       const jsonData = require("../../api/dados.json");
  //       const siteData = mapData(jsonData);
  //       setData(siteData[0]);
  //     } catch (e) {
  //       setData(undefined);
  //     }
  //   };
  //   load();
  // }, []);

  // useEffect(() => {
  //   if (data === undefined) {
  //     document.title = "Página não encontrada";
  //   }
  //   if (data && !data.slug) {
  //     document.title = "Carregando...";
  //   }
  //   if (data && data.title) {
  //     document.title = data.title;
  //   }
  // }, [data]);

  // if (!data) {
  //   return <PageNotFound />;
  // }
  // if (data && !data.slug) {
  //   return <Loading />;
  // }

  const { menu, sections, footerHtml, slug } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <div className="App">
      <Styled.Wrapper>
        <BaseTemplate
          links={links}
          footerHtml={footerHtml}
          logoData={{ text, link, srcImg }}
        >
          {sections.map((section, index) => {
            const { component } = section;
            const key = `${slug}-${index}`;
            if (component === "section.section-two-columns") {
              return <GridTwoColumns key={key} {...section} />;
            }
            if (component === "section.section-content") {
              return <GridContent key={key} {...section} />;
            }
            if (component === "section.section-grid-text") {
              return <GridText key={key} {...section} />;
            }
            if (component === "section.section-grid-image") {
              return <GridImage key={key} {...section} />;
            }
          })}
        </BaseTemplate>
      </Styled.Wrapper>
    </div>
  );
}

Home.propTypes = {
  data: P.array,
};
