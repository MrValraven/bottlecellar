import React from "react";
import { Route } from "react-router-dom";

import CellarOverview from "../../components/cellar-overview/CellarOverview";
import CellarItemPage from "../cellarItemPage/CellarItemPage";

import "./CellarPage.style.scss";

const CellarPage = ({ match }) => {
  return (
    <div className="cellar-page">
      <Route exact path={`${match.path}`} component={CellarOverview} />
      <Route path={`${match.path}/:name`} component={CellarItemPage} />
    </div>
  );
};
export default CellarPage;
