import React from "react";
import { withRouter } from "react-router-dom";

import "./cellar-item-list-view.styles.scss";
import defaultWineImage from "../../assets/defaultWine.jpg";
import logo from "../../assets/wine.svg";

const CellarItemListView = ({ item, history, match }) => {
  const { name, brand, year, rating } = item;
  const goToItemPage = () => {
    const cellarItemName = (name + " " + year)
      .replaceAll(" ", "-")
      .toLowerCase();
    history.push(`${match.url}/${cellarItemName}`);
  };

  return (
    <div className="cellar-item-list-view" onClick={goToItemPage}>
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
};

export default withRouter(CellarItemListView);