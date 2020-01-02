import {Link} from 'react-router-dom'
import logo from './logo.svg'
import React from 'react';
import './NavBar.css';

import SearchBar from './SearchBar';

function Navbar(props) {
  return (
    <nav className ="navbar">
      <div className ="nav_left">
        <Link><img src = {logo} alt="logo" className="nav_logo"/></Link>
      </div> 
      <div className ="nav_right">
        <ul>
          <li>
            <a href="#" >
              sign up
            </a>
          </li>
          <li>
            <a href="#" className="cart-box">
              <div className="cart-image">
                <div className="cart-counter">3</div>
              </div>
            </a>
          </li>
        </ul>
      </div> 
      <div className ="nav_fill">
        <SearchBar/>
      </div>   
    </nav>
  );
}

export default Navbar;