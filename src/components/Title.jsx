import React from "react";
import "../styles/Title.css";
import {NavLink} from 'react-router-dom';

function Title() {
  return (
    <div className="Title">
      <NavLink to="/"><h1>CHICAGOTOUR</h1></NavLink>
      <div className="Title-Subtitle">Chicago Places to Visit</div>

      <div>
        <NavLink to="/" className={ ({ isActive }) => "nav-link" + (isActive ? "-active": "") }>List</NavLink>
        <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? "-active": "") }>About</NavLink>
      </div>
    </div>
  );
}

export default Title;
