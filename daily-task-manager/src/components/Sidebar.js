import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="https://i.imgur.com/7D7xG2g.png" alt="User" className="user-avatar" />
        <div className="user-info">
          <h3>Alex Doe</h3>
          <p>alex.doe@example.com</p>
        </div>
      </div>
      <ul className="sidebar-nav">
        <li><a href="#" className="active">My Tasks</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Calendar</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
      <div className="sidebar-footer">
        <a href="#">Help & Support</a>
      </div>
    </div>
  );
};

export default Sidebar;
