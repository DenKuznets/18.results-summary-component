import styled from "styled-components";

export const StyledSummary = styled.div`
  width: 100%;
  padding: 1.1em 1.7em;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 515px;
    max-width: 370px;
    justify-content: center;
    font-size: 26px;
    /* border-radius: 0 36px 36px 0; */
    /* background-color: green; */
  }

  header {
    font-weight: 600;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1.3rem;
    }
  }

  .stat-lines-container {
    display: flex;
    flex-direction: column;
    padding: 1em 0;
    gap: 18px;
  }

  .summary__button {
    width: 100%;
    background-color: hsl(224, 30%, 27%);
    color: white;
    height: 55px;
    border-radius: 50px;
    margin-bottom: 1.2em;
    margin-top: 0.5em;
    font-size: 1rem;    
  }
`;
