import "./App.css";
import GlobalStyles from "./Global";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Result from "./components/Result";
import Summary from "./components/Summary";
import Flex from "./components/styles/Flex.styled";

const theme = {
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Flex>
            <Result />
            <Summary />
          </Flex>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
