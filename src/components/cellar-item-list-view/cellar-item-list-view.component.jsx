import React from "react";

import "./cellar-item-list-view.styles.scss";
import defaultWineImage from "../../assets/defaultWine.jpg";
import logo from "../../assets/wine.svg";

const CellarItemListView = ({ name, brand, year, rating }) => (
  <div className="cellar-item-list-view">
    <img src={defaultWineImage} alt="" />
    <div className="information">
      <div className="generalInfo">
        <h1>{name}</h1>
        <p>
          {brand}, {year}
        </p>
      </div>
      <div className="ratings">
        <p>{"⭐".repeat(parseInt(rating))}</p>
      </div>
    </div>
    <div className="bottlesAvailable">
      <span>0</span>
      <img src={logo} alt="" />
    </div>
  </div>
);

export default CellarItemListView;
