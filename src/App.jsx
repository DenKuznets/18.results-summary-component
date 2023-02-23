import "./App.css";
import GlobalStyles from "./Global";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  mobile: '768px',
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme} />
      <Container>
        <GlobalStyles />
        HELLO
      </Container>
    </>
  );
}

export default App;
