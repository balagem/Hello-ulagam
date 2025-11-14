import React from 'react';

const Header = ({ onShowAddTaskForm }) => {
  return (
    <div className="header">
      <h2>My Daily Tasks</h2>
      <p>Manage your main tasks and sub-tasks for the day.</p>
      <button className="add-task-btn" onClick={onShowAddTaskForm}>+ Add New Task</button>
    </div>
  );
};

export default Header;
