import "./App.css";
import { Container } from "./components/styles/Container.style";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import content from "./content";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => {
            return <Card key={index} item={item}></Card>;
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
