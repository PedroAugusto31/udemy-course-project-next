import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { SectionContainer } from "../SectionContainer";
import { TextComponent } from "../TextComponent";

export function Footer({ html }) {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
}

Footer.propTypes = {
  html: P.string.isRequired,
};
