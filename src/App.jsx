import "./App.css";
import Container from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Result from "./components/Result";
import Summary from "./components/Summary";
import Flex from "./components/styles/Flex.styled";

const theme = {
  desktop: "768px",
  colors: {
    primary: {
      primary0: "hsl(0, 100%, 67%)",
      primary1: "hsl(39, 100%, 56%)",
      primary2: "hsl(166, 100%, 37%)",
      primary3: "hsl(234, 85%, 45%)",
      primaryAlpha0: "hsla(0, 100%, 67%, 0.1)",
      primaryAlpha1: "hsla(39, 100%, 56%, 0.1)",
      primaryAlpha2: "hsla(166, 100%, 37%, 0.1)",
      primaryAlpha3: "hsla(234, 85%, 45%, 0.1)",
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
      <Container>
        <Result />
        <Summary />
      </Container>
    </ThemeProvider>
  );
}

export default App;
