import React from "react";

import "./default-button.styles.scss";

const DefaultButton = ({ buttonText, iconClass, clickEvent }) => (
  <button className="default-button" onClick={clickEvent}>
    {buttonText}
    {iconClass ? <i className={iconClass}></i> : null}
  </button>
);

export default DefaultButton;
