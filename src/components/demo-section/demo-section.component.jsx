import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { setCellarItems } from "../../redux/cellar/cellar.actions";

import "./demo-section.styles.scss";
import setOfBottles from "../../assets/wine1.png";
import emptyRack from "../../assets/rack.png";
import MOCK_DATA from "../../static/mockData";
import DefaultButton from "../default-button/default-button.component";

const DemoSection = ({ history }) => {
  const dispatch = useDispatch();

  const populateAppWithMockData = () => {
    dispatch(setCellarItems(MOCK_DATA));
    history.push("/user/cellar");
  };
  const resetAllData = () => {
    dispatch(setCellarItems([]));
    history.push("/user/cellar");
  };

  return (
    <div className="demo-container">
      <h1>Demo Section</h1>
      <div className="cards-container">
        <div className="demo-card">
          <img
            src={setOfBottles}
            alt="Set of wine bottles"
            className="bottles"
          />
          <div className="card-info">
            <p>
              Add 20 items to data to get a rapid visualization of the app at
              it's most complete state
            </p>
            <DefaultButton
              buttonText="Add Data"
              clickEvent={populateAppWithMockData}
            />
          </div>
        </div>
        <div className="demo-card">
          <img src={emptyRack} alt="Empty rack" />
          <div className="card-info">
            <p>Reset all data to visualize app at it's initial state</p>
            <DefaultButton buttonText="Reset Data" clickEvent={resetAllData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DemoSection);
