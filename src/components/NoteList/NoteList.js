import React from "react";
import "./NotesList.css";

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <p>{note.content}</p>
          <small>{note.timestamp}</small>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
