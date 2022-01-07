import React from "react";

import "./no-items-card.styles.scss";

import DefaultButton from "../default-button/default-button.component";

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
