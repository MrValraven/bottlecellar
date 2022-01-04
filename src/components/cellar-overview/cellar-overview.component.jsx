import React, { useState } from "react";

import "./cellar-overview.styles.scss";
import DefaultButton from "../default-button/default-button.component";

const CellarOverview = () => {
  const [showAddBottleModal, setShowAddBottleModal] = useState(false);

  return (
    <div className="cellar-overview">
      {showAddBottleModal ? <p>toggled!</p> : null}
      <div className="cellar-header">
        <h1 className="cellar-title">My cellar</h1>
        <DefaultButton
          buttonText="ADD NEW BOTTLE"
          onClick={() => setShowAddBottleModal(!showAddBottleModal)}
        ></DefaultButton>
      </div>
      <div className="cellar-filters">
        <input type="text" />
        <select name="filterBy" id="filterBy">
          <option value="name">Name</option>
          <option value="brand">Brand</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="cellar-container">
        <p onClick={() => setShowAddBottleModal(!showAddBottleModal)}>
          Bottle1
        </p>
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
