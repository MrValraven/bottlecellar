import React from "react";
import { Route } from "react-router-dom";

import CellarOverview from "../../components/cellar-overview/cellar-overview.component";
import CellarItemPage from "../cellarItemPage/cellarItemPage.component";

import "./cellar.styles.scss";

const CellarPage = ({ match }) => {
  return (
    <div className="cellar-page">
      <Route exact path={`${match.path}`} component={CellarOverview} />
      <Route path={`${match.path}/:name`} component={CellarItemPage} />
    </div>
  );
};
export default CellarPage;
