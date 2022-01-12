import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./CellarOverview.style.scss";
import wineBottle from "../../assets/wine-bottle.svg";
import DefaultButton from "../default-button/DefaultButton";
import Modal from "../modal/Modal";
import CellarItemListView from "../cellar-item-list-view/CellarItemListView";
import NoItemsCard from "../no-items-card/NoItemsCard";

const body = document.querySelector("body");

const CellarOverview = () => {
  let cellarItems = useSelector((state) => state.cellar.cellarItems);
  const [isLoading, setIsLoading] = useState(true);

  const [showAddBottleModal, setShowAddBottleModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [sortingOption, setSortingOption] = useState("No filter");
  const [sortedAndFilteredItems, setSortedAndFilteredItems] = useState([
    {
      id: "",
      name: "",
      brand: "",
      year: "",
      rating: "",
      price: "",
      quantity: "",
      notes: [],
    },
  ]);

  const filterItemsBySearchInput = (itemsArray) => {
    return itemsArray.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.year.toString().includes(searchInput) ||
        item.rating.includes(searchInput)
    );
  };

  const sortItemsBySortingOption = (sortingOption, itemsArray) => {
    if (sortingOption === null || itemsArray === null) return null;

    let filteredCellarItems = [];

    switch (sortingOption) {
      case "nameA-Z":
        filteredCellarItems = itemsArray.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case "nameZ-A":
        filteredCellarItems = itemsArray
          .sort((a, b) => a.name.localeCompare(b.name))
          .reverse();
        break;
      case "brandA-Z":
        filteredCellarItems = itemsArray.sort((a, b) =>
          a.brand.localeCompare(b.brand)
        );
        break;
      case "brandZ-A":
        filteredCellarItems = itemsArray
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .reverse();
        break;
      case "yearAscending":
        filteredCellarItems = itemsArray.sort((a, b) => a.year - b.year);
        break;
      case "yearDescending":
        filteredCellarItems = itemsArray.sort((a, b) => b.year - a.year);
        break;
      case "ratingAscending":
        filteredCellarItems = itemsArray.sort((a, b) =>
          a.rating.localeCompare(b.rating)
        );
        break;
      case "ratingDescending":
        filteredCellarItems = itemsArray
          .sort((a, b) => a.rating.localeCompare(b.rating))
          .reverse();
        break;
      case "quantityAscending":
        filteredCellarItems = itemsArray.sort(
          (a, b) => a.quantity - b.quantity
        );
        break;
      case "quantityDescending":
        filteredCellarItems = itemsArray.sort(
          (a, b) => b.quantity - a.quantity
        );
        break;
      default:
        filteredCellarItems = itemsArray;
        break;
    }

    return filteredCellarItems;
  };

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
    }, 0);
  }, []);

  useEffect(() => {
    if (cellarItems === null) {
      cellarItems = [];
    } else if (searchInput && cellarItems.length > 0) {
      setSortedAndFilteredItems(filterItemsBySearchInput(cellarItems));
    } else {
      setSortedAndFilteredItems(cellarItems);
    }
  }, [searchInput]);

  useEffect(() => {
    let items = sortItemsBySortingOption(sortingOption, cellarItems);
    setSearchInput("");
    if (items === null) {
      items = [];
    }
    setSortedAndFilteredItems([...items]);
  }, [sortingOption]);

  return (
    <div className="loading-div">
      {!isLoading ? (
        <div className="cellar-overview">
          {showAddBottleModal ? (
            <Modal
              toggleModal={toggleModal}
              modalHeaderText="Add new bottle"
              modalButtonText="Add bottle"
              formActionType="add"
              cellarItem={{
                name: "",
                brand: "",
                year: "",
                price: "",
                quantity: "",
                rating: "1",
              }}
            />
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
                placeholder="Search by name, brand, year, or rating number"
                value={searchInput}
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
                text="Looks like you haven't added any items yet."
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
