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
    dispatch(
      addItem({
        ...formData,
        name: formData.name.trim(),
        brand: formData.brand.trim(),
        year: Math.abs(formData.year),
        price: Math.abs(formData.price).toFixed(2),
        quantity: Math.abs(formData.quantity),
      })
    );
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
    price: "",
    quantity: "",
    rating: "1",
    notes: [],
  });
  return (
    <div className="add-bottle-modal-container">
      <div className="add-bottle-modal">
        <i className="fas fa-times" onClick={toggleModal}></i>
        <h1>Add new bottle</h1>
        <img src={logo} alt="logo" />
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
            type="number"
            name="year"
            onChange={(e) => handleChange(e)}
            required
          />
          <label name="price">Price *</label>
          <input
            type="text"
            name="price"
            onChange={(e) => handleChange(e)}
            required
          />
          <label name="quantity">Quantity *</label>
          <input
            type="number"
            name="quantity"
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
          </select>
          <DefaultButton buttonText="Add bottle" />
        </form>
      </div>
    </div>
  );
};

export default AddBottleModal;
