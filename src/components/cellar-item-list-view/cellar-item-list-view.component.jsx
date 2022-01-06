import React from "react";
import { withRouter } from "react-router-dom";

import "./cellar-item-list-view.styles.scss";
import defaultWineImage from "../../assets/defaultWine.jpg";
import logo from "../../assets/wine.svg";

const CellarItemListView = ({ item, history, match }) => {
  const { name, brand, year, price, quantity, notes, rating } = item;
  const goToItemPage = () => {
    const cellarItemName = (name + " " + brand + " " + year)
      .replaceAll(" ", "-")
      .toLowerCase();
    history.push(`${match.url}/${cellarItemName}`);
  };

  return (
    <div className="cellar-item-list-view" onClick={goToItemPage}>
      <img src={defaultWineImage} alt="" />
      <div className="information">
        <div className="generalInfo">
          <div className="nameAndBrand">
            <h1>{name}</h1>
            <p>
              {brand}, {year}
            </p>
          </div>
          <p>This item has {notes.length} notes</p>
        </div>
        <div className="ratings">
          <p>{price}€</p>
          <p>
            <span className="totalRating">
              {"⭐".repeat(parseInt(5 - rating))}
            </span>
            {"⭐".repeat(parseInt(rating))}
          </p>
        </div>
      </div>
      <div className="bottlesAvailable">
        <span>{quantity}</span>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default withRouter(CellarItemListView);
