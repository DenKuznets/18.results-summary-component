import styled from "styled-components";

const StyledResult = styled.div`
  color: white;
  background-color: blue;
  background: linear-gradient(${({ theme }) => theme.gradients.result});
  border-radius: 0 0 36px 36px;
  width: 100%;
  height: 357px;

  @media (min-width: ${({theme}) => theme.mobile}) {
    height: 515px;
    border-radius: 36px;
  }

  header {
    opacity: 0.7;
    margin-top: 1.2rem;
    
  }

  .result__score {
    margin-top: 1.2rem;
    border-radius: 50%;
    background: linear-gradient(${({ theme }) => theme.gradients.score});
    height: 8rem;
    width: 8rem;

    .result__flex {
      height: 100%;
      position: relative;

      .result__user-score {
        font-size: 3rem;
        font-weight: 700;
        line-height: 3.8rem;
        @media (min-width: ${({theme}) => theme.mobile}) {
          line-height: 3.2rem;
          font-size: 2.8rem;
        }
      }

      .result__total-score {
        line-height: 1.2rem;
        opacity: 0.5;
        font-size: 0.9rem;
        @media (min-width: ${({theme}) => theme.mobile}) {
          font-size: 0.7rem;
          line-height: 0.6rem;
        }
      }
    }
  }

  .result__info {
    h1 {
      font-size: 1.3rem;
      margin-top: 1.1rem;
      line-height: 1.7;
      @media (min-width: ${({theme}) => theme.mobile}) {
        font-size: 1.2rem;
        line-height: 1.1rem;
      }
    }
    p {
      font-size: 0.9rem;
      opacity: 0.6;
      max-width: 260px;
      line-height: 1.5;
      font-weight: 300;
      /* letter-spacing: 1px; */
      @media (min-width: ${({theme}) => theme.mobile}) {
        font-size: 0.7rem;
        margin-top: 24px;
        line-height: 0.9rem;
        max-width: 260px;
      }
    }
  }
`;

export default StyledResult