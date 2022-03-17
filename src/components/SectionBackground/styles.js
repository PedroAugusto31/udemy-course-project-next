import styled, { css } from "styled-components";

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    ${background && containerBackgroundActivate(theme)};

    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
