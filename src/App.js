import React from "react";
import Footer from "./components/Footer"; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ROUTES from "./_ROUTES";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {ROUTES.map((item, idx) => (
          <Route key={idx} exact path={item.path} component={item.component} />
        ))}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
