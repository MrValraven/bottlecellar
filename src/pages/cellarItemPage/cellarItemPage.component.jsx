import React from "react";
import { useSelector } from "react-redux";

import "./cellarItemPage.styles.scss";

import defaultWineImage from "../../assets/defaultWine.jpg";
import DefaultButton from "../../components/default-button/default-button.component";

const CellarItemPage = ({ match }) => {
  console.log(match);
  const currentCellarItem = useSelector((state) =>
    state.cellar.cellarItems.find(
      (cellarItem) =>
        (cellarItem.name + " " + cellarItem.year)
          .toLowerCase()
          .replaceAll(" ", "-") === match.params.name
    )
  );

  console.log(currentCellarItem);
  const { name, brand, year, rating } = currentCellarItem;

  return (
    <div className="cellar-item-page">
      <img src={defaultWineImage} alt="" />
      <div className="cellar-item-information">
        <h1>{name}</h1>
        <h2>
          {brand}, {year}
        </h2>
        <p className="rating">{"⭐".repeat(parseInt(rating))}</p>
        <p className="preco">10.49€</p>
        <p className="descricao">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          doloremque et ad dolore cupiditate officiis unde voluptas velit
          assumenda reprehenderit.
        </p>
        <p className="stock">
          Em stock: <span>20</span>
        </p>
        <div className="button-container">
          <DefaultButton buttonText="Edit Bottle" />
          <DefaultButton buttonText="Delete Bottle" />
        </div>
      </div>
    </div>
  );
};

export default CellarItemPage;
