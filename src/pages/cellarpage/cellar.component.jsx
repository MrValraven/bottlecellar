import React from "react";
import { Route } from "react-router-dom";
import CellarOverview from "../../components/cellar-overview/cellar-overview.component";

import "./cellar.styles.scss";

const CellarPage = ({ match }) => (
  <div className="cellar-page">
    <Route exact path={`${match.path}`} component={CellarOverview} />
    {/*  <Route path={`${match.path}/:cellarItemId`} component={CellarItemPage} /> */}
  </div>
);

export default CellarPage;
