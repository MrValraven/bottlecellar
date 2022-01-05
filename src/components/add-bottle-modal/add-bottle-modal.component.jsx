import React, { useState } from "react";

import { addItem } from "../../redux/cellar/cellar.actions";
import { useDispatch } from "react-redux";

import "./add-bottle-modal.styles.scss";
import logo from "../../assets/wine.svg";
import DefaultButton from "../default-button/default-button.component";

const AddBottleModal = ({ toggleModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(formData));
    toggleModal();
  };

  const handleChange = (e) => {
    setformData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const [formData, setformData] = useState({
    name: "",
    brand: "",
    year: "",
    rating: "",
  });
  return (
    <div className="add-bottle-modal-container">
      <div className="add-bottle-modal">
        <h1>Add new bottle</h1>
        <img src={logo} alt="logo" onClick={toggleModal} />
        <form onSubmit={handleSubmit}>
          <label name="name">Name *</label>
          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            required
          />
          <label name="brand">Brand *</label>
          <input
            name="brand"
            type="text"
            onChange={(e) => handleChange(e)}
            required
          />
          <label name="year">Year *</label>
          <input
            type="text"
            name="year"
            onChange={(e) => handleChange(e)}
            required
          />
          <label name="rating">Rating *</label>
          <select
            name="rating"
            id="rating"
            onChange={(e) => handleChange(e, name)}
            required
          >
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
