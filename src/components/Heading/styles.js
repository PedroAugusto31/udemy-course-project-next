import styled, { css } from "styled-components";

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.medium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

export const Title = styled.h1`
  ${({ theme, isLight, size, uppercase }) => css`
    color: ${isLight ? theme.colors.white : theme.colors.primary};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
