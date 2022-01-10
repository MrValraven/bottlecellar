import React, { useState } from "react";

import "./add-bottle-modal.styles.scss";
import logo from "../../assets/wine.svg";
import ModalForm from "../modal-form/modal-form.component.jsx";

const AddBottleModal = ({ toggleModal }) => {
  return (
    <div className="add-bottle-modal-container">
      <div className="add-bottle-modal">
        <i className="fas fa-times" onClick={toggleModal}></i>
        <h1>Add new bottle</h1>
        <img src={logo} alt="logo" />
        <ModalForm
          toggleModal={toggleModal}
          buttonText="Add bottle"
          cellarItem={{
            name: "",
            brand: "",
            year: "",
            price: "",
            quantity: "",
            rating: "1",
          }}
          formActionType="add"
        />
      </div>
    </div>
  );
};

export default AddBottleModal;
