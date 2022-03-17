import styled, { css } from "styled-components";
import { Title } from "../Heading/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.medium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
    ${Title} {
      margin-bottom: ${theme.spacings.xxlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.medium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;
export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
  `}
`;
