import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./cellar-overview.styles.scss";
import wineBottle from "../../assets/wine-bottle.svg";
import DefaultButton from "../default-button/default-button.component";
import AddBottleModal from "../add-bottle-modal/add-bottle-modal.component";
import CellarItemListView from "../cellar-item-list-view/cellar-item-list-view.component";
import NoItemsCard from "../no-items-card/no-items-card.component";

const body = document.querySelector("body");

const CellarOverview = () => {
  const cellarItems = useSelector((state) => state.cellar.cellarItems);
  const [isLoading, setIsLoading] = useState(true);

  const [showAddBottleModal, setShowAddBottleModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [sortingOption, setSortingOption] = useState("No filter");
  const [sortedAndFilteredItems, setSortedAndFilteredItems] = useState([]);

  const [sortedItems, setSortedItems] = useState([]);

  const toggleModal = () => {
    setShowAddBottleModal(!showAddBottleModal);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSortingOption(e.target.value);
  };

  useEffect(() => {
    setSortedAndFilteredItems(cellarItems);
    setSortedItems(cellarItems);
  }, [cellarItems]);

  useEffect(() => {
    if (showAddBottleModal) {
      body.classList.add("modalIsToggled");
    } else {
      body.classList.remove("modalIsToggled");
    }
  }, [showAddBottleModal]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      console.log(isLoading);
    }, 0);
  }, []);

  let filteredCellarItems = cellarItems.filter(
    (cellarItem) =>
      cellarItem.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      cellarItem.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
      cellarItem.year.toString().includes(searchInput) ||
      cellarItem.rating.includes(searchInput)
  );

  useEffect(() => {
    setSortedAndFilteredItems(() =>
      sortedItems.filter(
        (sortedItem) =>
          sortedItem.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          sortedItem.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
          sortedItem.year.toString().includes(searchInput) ||
          sortedItem.rating.includes(searchInput)
      )
    );
  }, [searchInput]);

  useEffect(() => {
    switch (sortingOption) {
      case "nameA-Z":
        filteredCellarItems = filteredCellarItems.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
      case "nameZ-A":
        filteredCellarItems = filteredCellarItems
          .sort((a, b) => a.name.localeCompare(b.name))
          .reverse();
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
      case "brandA-Z":
        filteredCellarItems = filteredCellarItems.sort((a, b) =>
          a.brand.localeCompare(b.brand)
        );
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
      case "brandZ-A":
        filteredCellarItems = filteredCellarItems
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .reverse();
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
      case "yearAscending":
        filteredCellarItems = filteredCellarItems.sort(
          (a, b) => a.year - b.year
        );
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
      case "yearDescending":
        filteredCellarItems = filteredCellarItems.sort(
          (a, b) => b.year - a.year
        );
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
      case "ratingAscending":
        filteredCellarItems = filteredCellarItems.sort((a, b) =>
          a.rating.localeCompare(b.rating)
        );
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
      case "ratingDescending":
        filteredCellarItems = filteredCellarItems
          .sort((a, b) => a.rating.localeCompare(b.rating))
          .reverse();
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
      case "quantityAscending":
        filteredCellarItems = filteredCellarItems.sort(
          (a, b) => a.quantity - b.quantity
        );
        console.log(filteredCellarItems);
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
      case "quantityDescending":
        filteredCellarItems = filteredCellarItems.sort(
          (a, b) => b.quantity - a.quantity
        );
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
      default:
        setSortedAndFilteredItems(filteredCellarItems);
        setSortedItems(filteredCellarItems);
        break;
    }
  }, [sortingOption]);

  return (
    <div className="loading-div">
      {!isLoading ? (
        <div className="cellar-overview">
          {showAddBottleModal ? (
            <AddBottleModal toggleModal={toggleModal} />
          ) : null}
          <div className="cellar-header">
            <h1 className="cellar-title">My Cellar</h1>
            {sortedAndFilteredItems.length > 0 ? (
              <DefaultButton
                additionalClass="headerButton"
                buttonText="ADD NEW BOTTLE"
                iconClass="fas fa-plus"
                clickEvent={toggleModal}
              />
            ) : null}
          </div>
          <div className="cellar-filters">
            <div className="input-container">
              <input
                type="text"
                placeholder="Search by name, brand, year, or rating"
                onChange={handleChange}
              />
              <i className="fas fa-search"></i>
            </div>
            <div className="mobileContainer">
              <div className="select-container">
                <select
                  name="filterBy"
                  id="filterBy"
                  value={sortingOption}
                  onChange={(e) => handleFilterChange(e)}
                >
                  <option value="No filter">No filter</option>
                  <option value="nameA-Z">Name (A-Z)</option>
                  <option value="nameZ-A">Name (Z-A)</option>
                  <option value="brandA-Z">Brand (A-Z)</option>
                  <option value="brandZ-A">Brand (Z-A)</option>
                  <option value="yearAscending">Year (Asc)</option>
                  <option value="yearDescending">Year (Desc)</option>
                  <option value="ratingAscending">Rating (Asc)</option>
                  <option value="ratingDescending">Rating (Desc)</option>
                  <option value="quantityAscending">Quantity (Asc)</option>
                  <option value="quantityDescending">Quantity (Desc)</option>
                </select>
                <i className="fas fa-chevron-down"></i>
              </div>
              {sortedAndFilteredItems.length > 0 ? (
                <DefaultButton
                  additionalClass="mobileButton"
                  buttonText="ADD NEW BOTTLE"
                  iconClass="fas fa-plus"
                  clickEvent={toggleModal}
                />
              ) : null}
            </div>
          </div>
          <div className="cellar-container">
            {sortedAndFilteredItems.length > 0 ? (
              sortedAndFilteredItems.map((item) => (
                <CellarItemListView key={item.id} item={item} />
              ))
            ) : (
              <NoItemsCard
                icon={wineBottle}
                iconAlt="Wine bottle"
                text="Looks like you haven't added any item yet."
                buttonText="Add new bottle"
                buttonIconClass="fas fa-plus"
                clickEvent={toggleModal}
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CellarOverview;
