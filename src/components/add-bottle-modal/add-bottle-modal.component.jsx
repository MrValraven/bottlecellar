import React from "react";

import "./add-bottle-modal.styles.scss";
import logo from "../../assets/wine.svg";
import DefaultButton from "../default-button/default-button.component";

const AddBottleModal = ({ toggleModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
    toggleModal();
  };
  return (
    <div className="add-bottle-modal-container">
      <div className="add-bottle-modal">
        <h1>Add new bottle</h1>
        <img src={logo} alt="logo" onClick={toggleModal} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name *</label>
          <input type="text" required />
          <label htmlFor="brand">Brand *</label>
          <input type="text" required />
          <label htmlFor="year">Year *</label>
          <input type="text" required />
          <label htmlFor="rating">Rating *</label>
          <select name="rating" id="rating" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <DefaultButton buttonText="Add bottle" />
        </form>
      </div>
    </div>
  );
};

export default AddBottleModal;
