import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCellarItems } from "../../redux/cellar/cellar.actions";

import CellarOverview from "../../components/cellar-overview/cellar-overview.component";

import "./cellar.styles.scss";

const CellarPage = ({ match }) => {
  const dispatch = useDispatch();

  const getCellarItemsFromLocalStorage = () => {
    const cellarItems = localStorage.getItem("cellarItems");

    if (cellarItems.length < 10) {
      return;
    }

    dispatch(setCellarItems(JSON.parse(cellarItems)));
  };

  useEffect(() => {
    getCellarItemsFromLocalStorage();
  }, []);
  return (
    <div className="cellar-page">
      <Route exact path={`${match.path}`} component={CellarOverview} />
      {/*  <Route path={`${match.path}/:cellarItemId`} component={CellarItemPage} /> */}
    </div>
  );
};
export default CellarPage;
