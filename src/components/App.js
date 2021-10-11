import { ThemeProvider } from "@material-ui/styles";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Services from "./Services";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/material-ui/" render={(props) =>
            <LandingPage
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />}
          />
          <Route exact path="/material-ui/services" render={(props) =>
            <Services
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />} />
          <Route exact path="/material-ui/customsoftware" component={() => <div>customsoftware</div>} />
          <Route exact path="/material-ui/mobileapps" component={() => <div>Mobile apps</div>} />
          <Route exact path="/material-ui/websites" component={() => <div>websites</div>} />
          <Route exact path="/material-ui/revolution" component={() => <div>revolution</div>} />
          <Route exact path="/material-ui/about" component={() => <div>about</div>} />
          <Route exact path="/material-ui/contact" component={() => <div>contact</div>} />
          <Route exact path="/material-ui/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;