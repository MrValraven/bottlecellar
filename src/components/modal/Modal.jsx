import React from "react";

import "./Modal.style.scss";
import logo from "../../assets/wine.svg";
import ModalForm from "../modal-form/ModalForm.jsx";

const Modal = ({
  toggleModal,
  modalHeaderText,
  modalButtonText,
  formActionType,
  cellarItem,
}) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <i className="fas fa-times" onClick={toggleModal}></i>
        <h1>{modalHeaderText}</h1>
        <img src={logo} alt="logo" />
        <ModalForm
          toggleModal={toggleModal}
          buttonText={modalButtonText}
          cellarItem={cellarItem}
          formActionType={formActionType}
        />
      </div>
    </div>
  );
};

export default Modal;
