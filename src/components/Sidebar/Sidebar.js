import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ groups, onGroupSelect, onAddGroup }) => {
  return (
    <div className="sidebar">
      <button className="create-group-btn" onClick={onAddGroup}>
        + Create Notes Group
      </button>
      <div className="groups">
        {groups.map((group) => (
          <div key={group.id} className="group" onClick={() => onGroupSelect(group.id)}>
            <div className="group-icon">DU</div>
            <span>{group.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
