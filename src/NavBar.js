import {Link} from 'react-router-dom'
import logo from './logo.svg'
import React from 'react';
import './NavBar.css';

function Navbar(props) {
  return (
    <nav className ="navbar">
      <ul>
        <li>
          <Link><img src = {logo} style={{width: 50 , height: 50}}/></Link>
        </li>
        <li>
          search bar
        </li>
        <li>
          <button>sign-in</button>
        </li>
        <li>
          <button>cart</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;