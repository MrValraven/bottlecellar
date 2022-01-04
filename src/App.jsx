import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import CellarPage from "./pages/cellarpage/cellar.component";

import "./App.scss";

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/user/cellar" component={CellarPage} />
    </Switch>
  </div>
);

export default App;
