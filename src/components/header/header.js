import React from 'react';

import './header.css';

import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {

  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Starwars DB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>     {/* <a href... => <Link to... (as a result: no page reloads when switching between Pages)*/}
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
        <li className={isLoggedIn ? 'd-none' : ''}>
          <Link to="/login">Login</Link>
        </li>
        <li className={isLoggedIn ? '' : 'd-none'}>
          <Link to="/secret">Secret Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;