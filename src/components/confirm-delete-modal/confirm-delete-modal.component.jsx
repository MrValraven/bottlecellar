import React from "react";

import "./confirm-delete-modal.styles.scss";
import DefaultButton from "../default-button/default-button.component";
import trashIcon from "../../assets/trash.svg";

const ConfirmDeleteModal = ({ clickEvent, toggleModal }) => (
  <div className="modal-overlay">
    <div className="confirm-delete-modal">
      <i className="fas fa-times" onClick={toggleModal}></i>
      <img src={trashIcon} alt="warning icon" />
      <p>
        Are you sure you want this item?
        <br />
        This action is irreversible!
      </p>
      <DefaultButton buttonText="Delete item" clickEvent={clickEvent} />
    </div>
  </div>
);

export default ConfirmDeleteModal;
