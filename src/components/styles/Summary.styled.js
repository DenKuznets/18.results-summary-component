import styled from "styled-components";

export const StyledSummary = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 355px;
  padding: 1.1rem 1.7rem;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    height: 515px;
    border-radius: 36px;
    max-width: 370px;
    /* padding: 0; */
  }

  header {
    font-weight: 600;
  }

  .stat-lines-container {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 18px;
  }

  .summary__button {
    width: 100%;
    background-color: hsl(224, 30%, 27%);
    color: white;
    height: 55px;
    border-radius: 50px;
    margin-bottom: 1.2rem;
    margin-top: 0.5rem;
  }
`;

export const StatLine = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 0.9rem;
  align-items: center;
  padding: 0 1rem;
  height: 55px;
  border-radius: 12px;
  background-color: ${({ theme, index }) =>
    theme.colors.primary[`primaryAlpha${index}`]};

  .stat-line__stat-img {
    margin-right: 0.5rem;
  }

  .stat-line__stat-name {
    color: ${({ theme, index }) => theme.colors.primary[`primary${index}`]};
    margin-right: auto;
  }

  .stat-line__stat-score {
    span {
      opacity: 0.5;
    }
  }
`;
