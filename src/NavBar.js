import {Link} from 'react-router-dom'
import logo from './logo.svg'
import React from 'react';
import './NavBar.css';

import SearchBar from './SearchBar';

function Navbar(props) {
  return (
    <nav className ="navbar">
      <div className ="nav_left">
        <Link to="/"><img src = {logo} alt="logo" className="nav_logo"/></Link>
      </div> 
      <div className ="nav_right">
        <div className ="signup">
          <Link className="mid-position" to="/signin">
            sign in
          </Link>
        </div>
        <div className="cart">
          <Link className="mid-position" to="/cart">
            <div className="cart-image">
              <div className="cart-counter">3</div>
            </div>
          </Link>
        </div>
      </div> 
      <div className ="nav_mid">
        <SearchBar/>
      </div>   
    </nav>
  );
}

export default Navbar;