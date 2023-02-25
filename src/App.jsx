import "./App.css";
import Container from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Result from "./components/Result";
import Summary from "./components/Summary";
import Flex from "./components/styles/Flex.styled";

const theme = {
  mobile: "768px",
  colors: {
    primary: {
      LighRed: "hsl(0, 100%, 67%)",
      OrangeyYellow: "hsl(39, 100%, 56%)",
      GreenTeal: "hsl(166, 100%, 37%)",
      CobaltBlue: "hsl(234, 85%, 45%)",
    },
    neutral: {
      White: "hsl(0, 0%, 100%)",
      PaleBlue: "hsl(221, 100%, 96%)",
      LightLavender: "hsl(241, 100%, 89%)",
      DarkGrayBlue: "hsl(224, 30%, 27%)",
    },
  },
  gradients: {
    result: "hsl(252, 100%, 67%), hsl(241, 81%, 54%)",
    score: "hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0)",
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
