import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import LandingPage from "../components/LandingPage/LandingPage";
import NotesList from "../components/NotesList/NotesList";
import "./App.css";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState([]);

  const handleAddGroup = () => {
    const groupName = prompt("Enter group name:");
    if (groupName) {
      const newGroup = { id: Date.now(), name: groupName };
      setGroups([...groups, newGroup]);
      localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));
    }
  };

  const handleGroupSelect = (groupId) => {
    setSelectedGroup(groupId);
    const storedNotes = JSON.parse(localStorage.getItem(`notes-${groupId}`)) || [];
    setNotes(storedNotes);
  };

  const handleAddNote = (content) => {
    if (selectedGroup && content) {
      const newNote = {
        id: Date.now(),
        content,
        timestamp: new Date().toLocaleString(),
      };
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      localStorage.setItem(`notes-${selectedGroup}`, JSON.stringify(updatedNotes));
    }
  };

  return (
    <div className="app-container">
      <Sidebar groups={groups} onGroupSelect={handleGroupSelect} onAddGroup={handleAddGroup} />
      <div className="main">
        {selectedGroup ? (
          <NotesList notes={notes} onAddNote={handleAddNote} />
        ) : (
          <LandingPage />
        )}
      </div>
    </div>
  );
};

export default App;
