import styled from "styled-components";

const Container = styled.div`
  max-width: 375px;
  flex-direction: row;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    max-width: 740px;
    min-width: 740px;
    flex-direction: row;
    flex: 1;
    border-radius: 36px;
    box-shadow: 1px 1px 40px 1px rgba(0, 0, 159, 0.1);
  }
`;

export default Container