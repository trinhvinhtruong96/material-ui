import { ThemeProvider } from "@material-ui/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header position="fixed" />
      Hello!
    </ThemeProvider>
  );
}

export default App;