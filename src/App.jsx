import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCellarItems } from "./redux/cellar/cellar.actions";

import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import CellarPage from "./pages/cellarpage/CellarPage";
import CellarItemPage from "./pages/cellarItemPage/CellarItemPage";
import Footer from "./components/footer/Footer";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  const getCellarItemsFromLocalStorage = () => {
    const cellarItems = localStorage.getItem("cellarItems");

    if (cellarItems === "null") {
      dispatch(setCellarItems([]));
      return;
    }

    dispatch(setCellarItems(JSON.parse(cellarItems)));
  };

  useEffect(() => {
    getCellarItemsFromLocalStorage();
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/user/cellar" component={CellarPage} />
        <Route path="/user/cellar/:name" component={CellarItemPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
