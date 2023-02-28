import styled from "styled-components";

const Container = styled.div`
  max-width: 375px;
  /* width: ; */
  min-height: 100vh;
  flex-direction: row;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  /* padding-bottom: 1rem; */
  /* background-color: red; */
  @media (min-width: ${({ theme }) => theme.desktop}) {
    max-width: 740px;
    flex-direction: row;
    flex: 1;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  }
`;

export default Container