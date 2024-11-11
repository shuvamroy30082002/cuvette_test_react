// src/components/Note/Note.js
import React from 'react';
import './Note.css';
import { formatDate } from '../../utils/helpers';

const Note = ({ note, onDelete }) => {
  return (
    <div className="note">
      <div className="note-header">
        <h3 className="note-title">{note.title}</h3>
        <button className="note-delete" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
      <p className="note-content">{note.content}</p>
      <div className="note-footer">
        <span className="note-date">{formatDate(note.date)}</span>
      </div>
    </div>
  );
};

export default Note;
