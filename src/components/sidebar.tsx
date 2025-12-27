import React from 'react';

export default function Sidebar() {
  const items = ['Home', 'Explore', 'Notifications', 'Messages', 'Lists', 'Bookmarks', 'Communities', 'Profile', 'More'];
  return (
    <nav className="sidebar">
      <div className="logo">X</div>
      <ul>
        {items.map((i) => (
          <li key={i} className="nav-item">
            <span className="icon" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
