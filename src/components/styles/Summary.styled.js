import styled from "styled-components";

export const StyledSummary = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 355px;
  padding: 1.1rem 1.7rem;

  .stat-line__container {
    flex-direction: row;
    justify-content: flex-start;
  }


`;

export const StatLine = styled.div`
  background-color: ${({ theme, index }) =>
    theme.colors.primary[`primary${index}`]};
  opacity: 0.1;

  .stat-line__stat-img {
    /* outline: 1px solid black; */
  }
`;
