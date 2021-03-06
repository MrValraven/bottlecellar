import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItem,
} from "../../redux/cellar/cellar.actions";

import "./CellarItem.style.scss";

import defaultWineImage from "../../assets/wine-details.png";
import Modal from "../modal/Modal";
import DefaultButton from "../default-button/DefaultButton";
import ConfirmDeleteModal from "../delete-confirmation-modal/DeleteConfirmationModal";

const body = document.querySelector("body");

const CellarItem = ({ currentCellarItem, history }) => {
  const dispatch = useDispatch();

  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [toggleConfirmDeleteModal, setToggleConfirmDeleteModal] =
    useState(false);

  const handleDeleteItem = () => {
    window.scrollTo(0, 0);
    history.push("/user/cellar");
    dispatch(removeItem(currentCellarItem));
  };

  useEffect(() => {
    toggleEditModal || toggleConfirmDeleteModal
      ? body.classList.add("modalIsToggled")
      : body.classList.remove("modalIsToggled");
  }, [toggleEditModal, toggleConfirmDeleteModal]);

  const decrementQuantity = () => {
    if (currentCellarItem.quantity <= 0) {
      return;
    }
    dispatch(decrementItemQuantity(currentCellarItem));
  };

  return (
    <div className="cellar-item-main">
      {toggleEditModal ? (
        <Modal
          toggleModal={() => setToggleEditModal(!toggleEditModal)}
          modalHeaderText="Edit bottle"
          modalButtonText="Save changes"
          formActionType="edit"
          cellarItem={currentCellarItem}
        />
      ) : null}
      {toggleConfirmDeleteModal ? (
        <ConfirmDeleteModal
          clickEvent={handleDeleteItem}
          toggleModal={() =>
            setToggleConfirmDeleteModal(!toggleConfirmDeleteModal)
          }
        />
      ) : null}
      <img src={defaultWineImage} alt="wine photo" />
      <div className="cellar-item-information">
        <h1>{currentCellarItem.name}</h1>
        <h2>
          {currentCellarItem.brand}, {currentCellarItem.year}
        </h2>
        <p className="rating">
          {"???".repeat(parseInt(currentCellarItem.rating))}
          <span className="totalRating">
            {"???".repeat(parseInt(5 - currentCellarItem.rating))}
          </span>
        </p>
        <p className="price">{currentCellarItem.price}???</p>
        <p className="description">
          The grapes are hand-selected separately, the fermentation is in
          frustoconical vats with delestage. Ageing for 9 months in Frenck oak
          barrels. Deep, concentrated plummy-red tones. Complex aroma of
          well-ripped red fruits. Full-flavoured, concentrated and with a long
          aftertaste.
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
            clickEvent={() =>
              setToggleConfirmDeleteModal(!toggleConfirmDeleteModal)
            }
          ></DefaultButton>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CellarItem);
