import "./App.css";
import Container from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Result from "./components/Result";
import Summary from "./components/Summary";
import Flex from "./components/styles/Flex.styled";

const theme = {
  mobile: "768px",
  colors: {
    LighRed: "hsl(0, 100%, 67%)",
    OrangeyYellow: "hsl(39, 100%, 56%)",
    GreenTeal: "hsl(166, 100%, 37%)",
    CobaltBlue: "hsl(234, 85%, 45%)",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
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
