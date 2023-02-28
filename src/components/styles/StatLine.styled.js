import styled from "styled-components";

const StyledStatLine = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 0.9rem;
  align-items: center;
  padding: 0 1rem;
  height: 55px;
  border-radius: 12px;
  background-color: ${(props) => props.bg};
  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 1rem;
  }

  .stat-line__stat-img {
    margin-right: 0.5rem;
  }

  .stat-line__stat-name {
    color: ${(props) => props.textColor};
    margin-right: auto;
  }

  .stat-line__stat-score {
    span {
      opacity: 0.5;
    }
  }
`;
 
export default StyledStatLine;
