import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    opacity: 0.8;
  `}
`;
