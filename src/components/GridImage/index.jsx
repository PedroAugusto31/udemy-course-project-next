import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

export function GridImage({
  background = false,
  title,
  description,
  grid,
  sectionId = "",
}) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading as="h2" isLight={background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.ImageGrid>
          {grid.map((img) => (
            <Styled.GridElement key={img.altText}>
              <Styled.Image src={img.srcImg} alt={img.altText} />
            </Styled.GridElement>
          ))}
        </Styled.ImageGrid>
      </Styled.Container>
    </SectionBackground>
  );
}

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  sectionId: P.string,
};
