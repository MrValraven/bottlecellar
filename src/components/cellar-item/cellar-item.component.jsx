import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItem,
} from "../../redux/cellar/cellar.actions";

import "./cellar-item.styles.scss";

import defaultWineImage from "../../assets/wine-details.png";
import EditBottleModal from "../../components/edit-bottle-modal/edit-bottle-modal.component";
import DefaultButton from "../../components/default-button/default-button.component";

const body = document.querySelector("body");

const CellarItem = ({ currentCellarItem }) => {
  const dispatch = useDispatch();

  const [toggleEditModal, setToggleEditModal] = useState(false);

  useEffect(() => {
    toggleEditModal
      ? body.classList.add("modalIsToggled")
      : body.classList.remove("modalIsToggled");
  }, [toggleEditModal]);

  const decrementQuantity = () => {
    if (currentCellarItem.quantity <= 0) {
      return;
    }
    dispatch(decrementItemQuantity(currentCellarItem));
  };

  return (
    <div className="cellar-item-main">
      {toggleEditModal ? (
        <EditBottleModal
          toggleModal={() => setToggleEditModal(!toggleEditModal)}
          cellarItem={currentCellarItem}
        />
      ) : null}
      <img src={defaultWineImage} alt="wine photo" />
      <div className="cellar-item-information">
        <h1>{currentCellarItem.name}</h1>
        <h2>
          {currentCellarItem.brand}, {currentCellarItem.year}
        </h2>
        <p className="rating">
          {"⭐".repeat(parseInt(currentCellarItem.rating))}
          <span className="totalRating">
            {"⭐".repeat(parseInt(5 - currentCellarItem.rating))}
          </span>
        </p>
        <p className="price">{currentCellarItem.price}€</p>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          doloremque et ad dolore cupiditate officiis unde voluptas velit
          assumenda reprehenderit.
        </p>
        <p className="quantity">
          <span>Quantity:</span>
          <i className="fas fa-minus" onClick={decrementQuantity}></i>
          <span className="quantityValue">{currentCellarItem.quantity}</span>
          <i
            className="fas fa-plus"
            onClick={() => dispatch(incrementItemQuantity(currentCellarItem))}
          ></i>
        </p>
        <div className="button-container">
          <DefaultButton
            buttonText="Edit Bottle"
            iconClass="far fa-edit"
            clickEvent={() => {
              setToggleEditModal(!toggleEditModal);
            }}
          />
          <DefaultButton
            buttonText="Delete Bottle"
            iconClass="far fa-trash-alt"
            clickEvent={() => {
              history.push("/user/cellar");
              dispatch(removeItem(currentCellarItem));
            }}
          ></DefaultButton>
        </div>
      </div>
    </div>
  );
};

export default CellarItem;
