import React, { useState, useEffect } from "react";

import "./edit-bottle-modal.styles.scss";
import logo from "../../assets/wine.svg";
import ModalForm from "../modal-form/modal-form.component.jsx";

const EditBottleModal = ({ toggleModal, cellarItem }) => {
  return (
    <div className="edit-bottle-modal-container">
      <div className="edit-bottle-modal">
        <i className="fas fa-times" onClick={toggleModal}></i>
        <h1>Edit bottle</h1>
        <img src={logo} alt="logo" />
        <ModalForm
          toggleModal={toggleModal}
          cellarItem={cellarItem}
          formActionType="edit"
          buttonText="Save changes"
        />
      </div>
    </div>
  );
};

export default EditBottleModal;
