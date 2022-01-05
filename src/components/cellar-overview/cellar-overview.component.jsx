import React, { useState } from "react";

import "./cellar-overview.styles.scss";
import DefaultButton from "../default-button/default-button.component";
import AddBottleModal from "../add-bottle-modal/add-bottle-modal.component";

const CellarOverview = () => {
  const [showAddBottleModal, setShowAddBottleModal] = useState(false);

  const toggleModal = () => {
    console.log("toggle");
    setShowAddBottleModal(!showAddBottleModal);
  };

  return (
    <div className="cellar-overview">
      {showAddBottleModal ? <AddBottleModal toggleModal={toggleModal} /> : null}
      <div className="cellar-header">
        <h1 className="cellar-title">My cellar</h1>
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
        <p>Bottle2</p>
        <p>Bottle3</p>
        <p>Bottle4</p>
        <p>Bottle5</p>
        <p>Bottle6</p>
        <p>Bottle7</p>
        <p>Bottle8</p>
        <p>Bottle9</p>
      </div>
    </div>
  );
};

export default CellarOverview;
