import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./cellar-overview.styles.scss";
import DefaultButton from "../default-button/default-button.component";
import AddBottleModal from "../add-bottle-modal/add-bottle-modal.component";

const CellarOverview = () => {
  const [showAddBottleModal, setShowAddBottleModal] = useState(false);

  const cellarItems = useSelector((state) => state.cellar.cellarItems);

  const toggleModal = () => {
    setShowAddBottleModal(!showAddBottleModal);
    const body = document.querySelector("body");
    if (setShowAddBottleModal) {
      body.classList.add("modalIsToggled");
    } else {
      body.classList.remove("modalIsToggled");
    }
  };

  return (
    <div className="cellar-overview">
      {showAddBottleModal ? <AddBottleModal toggleModal={toggleModal} /> : null}
      <div className="cellar-header">
        <h1 className="cellar-title">My Cellar</h1>
        <DefaultButton
          buttonText="ADD NEW BOTTLE"
          onClick={toggleModal}
        ></DefaultButton>
      </div>
      <div className="cellar-filters">
        <input type="text" placeholder="Search by name, brand, year..." />
        <select name="filterBy" id="filterBy">
          <option value="name">Name</option>
          <option value="brand">Brand</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="cellar-container">
        <p onClick={toggleModal}>Bottle1</p>
        {cellarItems.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default CellarOverview;