import P from "prop-types";
import * as Styled from "./styles";
import { KeyboardArrowUp } from "@styled-icons/material-outlined/KeyboardArrowUp";

export function GoTop() {
  return (
    <Styled.Container href="#" aria-label="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
}
