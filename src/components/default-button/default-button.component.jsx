import React from "react";

import "./default-button.styles.scss";

const DefaultButton = ({ buttonText, iconClass }) => (
  <button className="default-button">
    {buttonText}
    {iconClass ? <i className={iconClass}></i> : null}
  </button>
);

export default DefaultButton;
