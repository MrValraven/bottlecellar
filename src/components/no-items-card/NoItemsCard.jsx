import React from "react";

import "./NoItemsCard.style.scss";

import DefaultButton from "../default-button/DefaultButton";

const NoItemsCard = ({
  icon,
  iconAlt,
  text,
  buttonText,
  buttonIconClass,
  clickEvent,
}) => {
  return (
    <div className="no-items-card">
      <img src={icon} alt={iconAlt} />
      <p>{text}</p>
      <DefaultButton
        buttonText={buttonText}
        clickEvent={clickEvent}
        iconClass={buttonIconClass}
      />
    </div>
  );
};

export default NoItemsCard;
