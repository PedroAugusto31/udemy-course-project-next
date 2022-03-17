import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

export function GridText({
  title,
  description,
  grid,
  background = false,
  sectionId = "",
}) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase isLight={background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((elem) => (
            <Styled.GridElement key={elem.title}>
              <Heading size="medium" isLight={background} as="h3">
                {elem.title}
              </Heading>
              <TextComponent>{elem.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
  sectionId: P.string,
};
