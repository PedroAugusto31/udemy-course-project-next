import P from "prop-types";
import * as Styled from "./styles";

export function TextComponent({ children }) {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
}

TextComponent.propTypes = {
  children: P.node.isRequired,
};
