import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { editItem } from "../../redux/cellar/cellar.actions";
import { useDispatch } from "react-redux";

import "./Edit-bottle-modal.styles.scss";
import logo from "../../assets/wine.svg";
import DefaultButton from "../default-button/default-button.component";

const EditBottleModal = ({ toggleModal, cellarItem, history }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editItem({
        ...cellarItem,
        ...formData,
        year: Math.abs(formData.year),
        price: Math.abs(formData.price),
        quantity: Math.abs(formData.quantity),
      })
    );
    toggleModal();
    const sanitizeURL = (
      formData.name +
      " " +
      formData.brand +
      " " +
      formData.year
    )
      .toLowerCase()
      .replaceAll(" ", "-");
    history.push(`/user/cellar/${sanitizeURL}`);
  };

  const handleChange = (e) => {
    setformData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const [formData, setformData] = useState({
    name: cellarItem.name,
    brand: cellarItem.brand,
    year: cellarItem.year,
    price: cellarItem.price,
    quantity: cellarItem.quantity,
    rating: cellarItem.rating,
  });
  return (
    <div className="edit-bottle-modal-container">
      <div className="edit-bottle-modal">
        <h1>Edit bottle</h1>
        <img src={logo} alt="logo" onClick={toggleModal} />
        <form onSubmit={handleSubmit}>
          <label name="name">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            required
          />
          <label name="brand">Brand *</label>
          <input
            name="brand"
            type="text"
            value={formData.brand}
            onChange={(e) => handleChange(e)}
            required
          />
          <label name="year">Year *</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={(e) => handleChange(e)}
            required
          />
          <label name="price">Price *</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => handleChange(e)}
            required
          />
          <label name="quantity">Quantity *</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={(e) => handleChange(e)}
            required
          />
          <label name="rating">Rating *</label>
          <select
            name="rating"
            id="rating"
            value={formData.rating}
            onChange={(e) => handleChange(e, name)}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <DefaultButton buttonText="Edit bottle" />
        </form>
      </div>
    </div>
  );
};

export default withRouter(EditBottleModal);
