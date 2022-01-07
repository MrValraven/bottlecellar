import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItemNotes } from "../../redux/cellar/cellar.actions";

import "./notes.styles.scss";

import DefaultButton from "../../components/default-button/default-button.component";
import NotesCard from "../../components/notes-card/notes-card.component";

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
        {!toggleNewNoteCreation ? (
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
      {currentCellarItem.notes.map((note, index) => (
        <NotesCard
          key={index}
          note={note}
          handleEdit={() => handleNoteEdit(index)}
          handleDelete={() => handleNoteDeletion(index)}
        />
      ))}
    </div>
  );
};

export default Notes;
