import React from "react";

import "./DefaultButton.style.scss";

const DefaultButton = ({
  additionalClass,
  buttonText,
  iconClass,
  clickEvent,
}) => (
  <button className={`default-button ${additionalClass}`} onClick={clickEvent}>
    {buttonText}
    {iconClass ? <i className={iconClass}></i> : null}
  </button>
);

export default DefaultButton;
