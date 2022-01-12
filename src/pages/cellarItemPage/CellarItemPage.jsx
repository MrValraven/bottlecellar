import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import "./CellarItemPage.style.scss";

import Notes from "../../components/notes/Notes";
import CellarItem from "../../components/cellar-item/CellarItem";

const CellarItemPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentCellarItem, setCurrentCellarItem] = useState();
  useState;

  const currentCellarItemTemp = useSelector((state) =>
    state.cellar.cellarItems.find(
      (cellarItem) => cellarItem.id === match.params.name
    )
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 0);
  }, []);

  useEffect(() => {
    setCurrentCellarItem(currentCellarItemTemp);
  }, [currentCellarItemTemp]);

  return (
    <div>
      {isLoading ? (
        <div className="cellar-item-page">
          <CellarItem currentCellarItem={currentCellarItem} />
          <hr />
          <Notes currentCellarItem={currentCellarItem} />
        </div>
      ) : null}
    </div>
  );
};

export default withRouter(CellarItemPage);
