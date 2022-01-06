import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItem,
} from "../../redux/cellar/cellar.actions";
import { withRouter } from "react-router-dom";

import "./cellarItemPage.styles.scss";

import defaultWineImage from "../../assets/defaultWine.jpg";
import DefaultButton from "../../components/default-button/default-button.component";
import EditBottleModal from "../../components/edit-bottle-modal/edit-bottle-modal.component";

const body = document.querySelector("body");

const CellarItemPage = ({ match, history }) => {
  const dispatch = useDispatch();

  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [toggleNewNoteCreation, setToggleNewNoteCreation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCellarItem, setCurrentCellarItem] = useState();

  const currentCellarItemTemp = useSelector((state) =>
    state.cellar.cellarItems.find(
      (cellarItem) =>
        (cellarItem.name + " " + cellarItem.brand + " " + cellarItem.year)
          .toLowerCase()
          .replaceAll(" ", "-") === match.params.name
    )
  );

  const toggleModal = () => {
    setToggleEditModal(!toggleEditModal);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 0);
  }, []);

  useEffect(() => {
    toggleEditModal
      ? body.classList.add("modalIsToggled")
      : body.classList.remove("modalIsToggled");
  }, [toggleEditModal]);

  useEffect(() => {
    setCurrentCellarItem(currentCellarItemTemp);
  }, [currentCellarItemTemp]);

  const decrementQuantity = () => {
    if (currentCellarItem.quantity <= 0) {
      return;
    }
    dispatch(decrementItemQuantity(currentCellarItem));
  };

  return (
    <div>
      {isLoading ? (
        <div className="cellar-item-page">
          {toggleEditModal ? (
            <EditBottleModal
              toggleModal={toggleModal}
              cellarItem={currentCellarItem}
            />
          ) : null}
          <div className="cellar-item-main">
            <img
              src={defaultWineImage}
              alt="wine photo"
              onClick={toggleModal}
            />
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
              <p
                className="price"
                onClick={() => setToggleNewNoteCreation(!toggleNewNoteCreation)}
              >
                {currentCellarItem.price}€
              </p>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                doloremque et ad dolore cupiditate officiis unde voluptas velit
                assumenda reprehenderit.
              </p>
              <p className="quantity">
                <span>Quantity:</span>
                <i className="fas fa-minus" onClick={decrementQuantity}></i>
                <span className="quantityValue">
                  {currentCellarItem.quantity}
                </span>
                <i
                  className="fas fa-plus"
                  onClick={() =>
                    dispatch(incrementItemQuantity(currentCellarItem))
                  }
                ></i>
              </p>
              <div className="button-container">
                <DefaultButton
                  buttonText="Edit Bottle"
                  iconClass="far fa-edit"
                  onClick={() => setToggleEditModal(!toggleEditModal)}
                />
                <DefaultButton
                  buttonText="Delete Bottle"
                  iconClass="far fa-trash-alt"
                  onClick={() => {
                    history.push("/user/cellar");
                    dispatch(removeItem(currentCellarItem));
                  }}
                ></DefaultButton>
              </div>
            </div>
          </div>
          <div className="notes-header">
            <h1 className="notes-title">Notes</h1>
            {!toggleNewNoteCreation ? (
              <DefaultButton
                buttonText="Add new note"
                iconClass="far fa-sticky-note"
              />
            ) : null}
          </div>
          {toggleNewNoteCreation ? (
            <div className="note-creation">
              <textarea placeholder="Write your new note here" />
              <DefaultButton
                buttonText="Add note"
                iconClass="far fa-sticky-note"
              />
            </div>
          ) : null}
          <div className="notes-container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              nobis, itaque saepe voluptatum cupiditate eveniet rem ex error
              molestiae, laudantium quae id ut magnam provident atque doloremque
              repudiandae explicabo vitae!
            </p>
            <div className="actions-container">
              <i className="far fa-edit"></i>
              <i className="far fa-trash-alt"></i>
            </div>
          </div>
          <div className="notes-container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              nobis, itaque saepe voluptatum cupiditate eveniet rem ex error
              molestiae, laudantium quae id ut magnam provident atque doloremque
              repudiandae explicabo vitae!
            </p>
            <div className="actions-container">
              <i className="far fa-edit"></i>
              <i className="far fa-trash-alt"></i>
            </div>
          </div>
          <div className="notes-container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              nobis, itaque saepe voluptatum cupiditate eveniet rem ex error
              molestiae, laudantium quae id ut magnam provident atque doloremque
              repudiandae explicabo vitae!
            </p>
            <div className="actions-container">
              <i className="far fa-edit"></i>
              <i className="far fa-trash-alt"></i>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default withRouter(CellarItemPage);
