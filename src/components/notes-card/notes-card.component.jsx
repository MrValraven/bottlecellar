import React from "react";

import "./notes-card.styles.scss";

const NotesCard = ({ note, handleEdit, handleDelete }) => {
  return (
    <div className="notes-container">
      <p>{note}</p>
      <div className="actions-container">
        <i className="far fa-edit" onClick={handleEdit}></i>
        <i className="far fa-trash-alt" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default NotesCard;
