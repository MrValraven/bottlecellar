import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItemNotes } from "../../redux/cellar/cellar.actions";

import "./Notes.style.scss";
import noteIcon from "../../assets/note.svg";

import DefaultButton from "../default-button/DefaultButton";
import NotesCard from "../notes-card/NotesCard";
import NoItemsCard from "../no-items-card/NoItemsCard";

const Notes = ({ currentCellarItem }) => {
  const dispatch = useDispatch();

  const [note, setNote] = useState("");
  const [tempNote, setTempNote] = useState("");
  const [toggleNewNoteCreation, setToggleNewNoteCreation] = useState(false);

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleNoteEdit = (index) => {
    setTempNote(currentCellarItem.notes.splice(index, 1));
    setToggleNewNoteCreation(!toggleNewNoteCreation);
  };

  const handleNoteDeletion = (index) => {
    currentCellarItem.notes.splice(index, 1);
    dispatch(setItemNotes(currentCellarItem));
  };

  const handleNoteEditCancelation = () => {
    if (tempNote) {
      currentCellarItem.notes.push(tempNote);
      setTempNote("");
    }

    setToggleNewNoteCreation(!toggleNewNoteCreation);
  };

  useEffect(() => {
    setNote(tempNote);
  }, [tempNote]);

  const handleNewNoteSubmission = () => {
    if (note.length <= 0) {
      return;
    }

    dispatch(
      setItemNotes({
        ...currentCellarItem,
        notes: [note, ...currentCellarItem.notes],
      })
    );
    setToggleNewNoteCreation(!toggleNewNoteCreation);
    setNote("");
  };

  return (
    <div className="notes-component">
      <div className="notes-header">
        <h1 className="notes-title">Notes</h1>
        {!toggleNewNoteCreation && currentCellarItem.notes.length > 0 ? (
          <DefaultButton
            buttonText="Add new note"
            iconClass="far fa-sticky-note"
            clickEvent={() => setToggleNewNoteCreation(!toggleNewNoteCreation)}
          />
        ) : null}
      </div>
      {toggleNewNoteCreation ? (
        <div className="note-creation">
          <textarea
            placeholder="Write your new note here"
            value={note}
            onChange={(e) => handleChange(e)}
          />
          <div className="textarea-button-container">
            <DefaultButton
              buttonText="Add note"
              iconClass="far fa-sticky-note"
              clickEvent={handleNewNoteSubmission}
            />
            <DefaultButton
              buttonText="Cancel"
              iconClass="far fa-window-close"
              clickEvent={handleNoteEditCancelation}
            />
          </div>
        </div>
      ) : null}
      {currentCellarItem.notes.length > 0 ? (
        currentCellarItem.notes.map((note, index) => (
          <NotesCard
            key={index}
            note={note}
            handleEdit={() => handleNoteEdit(index)}
            handleDelete={() => handleNoteDeletion(index)}
          />
        ))
      ) : (
        <NoItemsCard
          icon={noteIcon}
          iconAlt="Note"
          text="Looks like you haven't added any notes yet."
          buttonText="Add new note"
          buttonIconClass="fas fa-plus"
          clickEvent={() => setToggleNewNoteCreation(!toggleNewNoteCreation)}
        />
      )}
    </div>
  );
};

export default Notes;
