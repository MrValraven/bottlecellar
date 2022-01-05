import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/cellar/cellar.actions";
import { withRouter } from "react-router-dom";

import "./cellarItemPage.styles.scss";

import defaultWineImage from "../../assets/defaultWine.jpg";
import DefaultButton from "../../components/default-button/default-button.component";
import EditBottleModal from "../../components/edit-bottle-modal/edit-bottle-modal.component";

const body = document.querySelector("body");

const CellarItemPage = ({ match, history }) => {
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setToggleEditModal(!toggleEditModal);
  };

  useEffect(() => {
    if (toggleEditModal) {
      body.classList.add("modalIsToggled");
    } else {
      body.classList.remove("modalIsToggled");
    }
  }, [toggleEditModal]);

  const currentCellarItem = useSelector((state) =>
    state.cellar.cellarItems.find(
      (cellarItem) =>
        (cellarItem.name + " " + cellarItem.year)
          .toLowerCase()
          .replaceAll(" ", "-") === match.params.name
    )
  );

  const { name, brand, year, price, quantity, rating } = currentCellarItem;

  return (
    <div className="cellar-item-page">
      {toggleEditModal ? (
        <EditBottleModal
          toggleModal={toggleModal}
          cellarItem={currentCellarItem}
        />
      ) : null}
      <div className="cellar-item-main">
        <img src={defaultWineImage} alt="" />
        <div className="cellar-item-information">
          <h1>{name}</h1>
          <h2>
            {brand}, {year}
          </h2>
          <p className="rating">{"⭐".repeat(parseInt(rating))}</p>
          <p className="preco">{price}€</p>
          <p className="descricao">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            doloremque et ad dolore cupiditate officiis unde voluptas velit
            assumenda reprehenderit.
          </p>
          <p className="stock" onClick={toggleModal}>
            Stock: <span>{quantity}</span>
            <i className="fas fa-plus"></i>
            <i className="fas fa-minus"></i>
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
      <h1 className="notes-title">Notes:</h1>
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
  );
};

export default withRouter(CellarItemPage);
