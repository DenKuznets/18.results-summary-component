import styled from "styled-components";

const StyledResult = styled.div`
  color: white;
  background-color: blue;
  background: linear-gradient(${({ theme }) => theme.gradients.result});
  border-radius: 0 0 2rem 2rem;
  height: 355px;

  header {
    opacity: 0.7;
    margin-top: 1.2rem;
  }

  .result__score {
    margin-top: 1.3rem;
    border-radius: 50%;
    background: linear-gradient(${({ theme }) => theme.gradients.score});
    height: 140px;
    width: 140px;
  }
`;

export default StyledResult