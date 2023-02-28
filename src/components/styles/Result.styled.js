import styled from "styled-components";

const StyledResult = styled.div`
  color: white;
  background-color: blue;
  background: linear-gradient(${({ theme }) => theme.gradients.result});
  border-radius: 0 0 36px 36px;
  width: 100%;
  height: 357px;
  font-size: 18px;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 515px;
    border-radius: 36px;
    font-size: 26px;
  }

  header {
    opacity: 0.7;
    margin-top: 1.4em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1.4rem;
    }
  }

  .result__score {
    margin-top: 1.2em;
    border-radius: 50%;
    background: linear-gradient(${({ theme }) => theme.gradients.score});
    height: 8em;
    width: 8em;

    .result__flex {
      height: 100%;
      position: relative;

      .result__user-score {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.3;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          line-height: 1.15;
          font-size: 3.8rem;
        }
      }

      .result__total-score {
        line-height: 1.2;
        opacity: 0.5;
        font-size: 0.9rem;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          /* font-size: 0.7rem; */
          line-height: 1;
        }
      }
    }
  }

  .result__info {
    h1 {
      font-size: 1.3rem;
      margin-top: 0.7em;
      line-height: 1.7;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.8rem;
        line-height: 1.2;
      }
    }
    p {
      font-size: 0.9rem;
      opacity: 0.6;
      max-width: 260px;
      line-height: 1.5;
      font-weight: 300;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1rem;
        margin-top: 1em;
        line-height: 1.2;
        max-width: 260px;
      }
    }
  }
`;

export default StyledResult