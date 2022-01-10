import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editItem, addItem } from "../../redux/cellar/cellar.actions";

import "./modal-form.styles.scss";

import DefaultButton from "../default-button/default-button.component";

const ModalForm = ({ cellarItem, toggleModal, buttonText, formActionType }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: cellarItem.name || "",
    brand: cellarItem.brand || "",
    year: cellarItem.year || "",
    price: cellarItem.price || "",
    quantity: cellarItem.quantity || "",
    rating: cellarItem.rating || "",
  });

  const handleChange = (e) => {
    if (e.target.name === "price") {
      e.target.value = Number(e.target.value).toFixed(2);
    }
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: formData.name.trim(),
      brand: formData.brand.trim(),
      year: Math.abs(formData.year),
      price: Math.abs(formData.price),
      quantity: Math.abs(formData.quantity),
      rating: formData.rating,
    });
    if (formActionType === "edit") {
      dispatch(
        editItem({
          ...cellarItem,
          ...formData,
        })
      );
    } else {
      dispatch(addItem(formData));
    }
    toggleModal();
  };

  return (
    <form className="modal-form" onSubmit={(e) => handleSubmit(e)}>
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
        pattern="[0-9]{4}"
        min="0"
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
        min="0"
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
      <DefaultButton buttonText={buttonText} />
    </form>
  );
};

export default ModalForm;
