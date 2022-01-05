import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./cellar-overview.styles.scss";
import DefaultButton from "../default-button/default-button.component";
import AddBottleModal from "../add-bottle-modal/add-bottle-modal.component";
import CellarItemListView from "../cellar-item-list-view/cellar-item-list-view.component";

const CellarOverview = () => {
  const [showAddBottleModal, setShowAddBottleModal] = useState(false);

  const cellarItems = useSelector((state) => state.cellar.cellarItems);

  const toggleModal = () => {
    console.log(cellarItems);
    setShowAddBottleModal(!showAddBottleModal);
    const body = document.querySelector("body");
    if (setShowAddBottleModal) {
      body.classList.add("modalIsToggled");
    } else {
      body.classList.remove("modalIsToggled");
    }
  };

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredCellarItems = cellarItems.filter(
    (cellarItem) =>
      cellarItem.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      cellarItem.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
      cellarItem.year.includes(searchInput)
  );

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
        <input
          type="text"
          placeholder="Search by name, brand, year..."
          value={searchInput}
          onChange={handleChange}
        />
        <select name="filterBy" id="filterBy">
          <option value="name">Name</option>
          <option value="brand">Brand</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="cellar-container">
        <p className="toggle" onClick={toggleModal}>
          Bottle1
        </p>
        {filteredCellarItems.map((item) => (
          <CellarItemListView key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CellarOverview;
