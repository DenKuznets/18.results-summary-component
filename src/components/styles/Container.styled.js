import styled from "styled-components";

const Container = styled.div`
  max-width: 375px;
  min-height: 100vh;
  flex-direction: row;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  /* background-color: red; */
  @media (min-width: 760px) {
    max-width: 740px;
    flex-direction: row;
  }
`;

export default Container