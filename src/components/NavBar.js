import {Link} from 'react-router-dom'
import logo from '../icons/logo.svg'
import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedInUser: props.signedInUser,
      cartNo: props.cartNo
    };
  }

  signInButtonHandler = (event) => {
    document.querySelector('.modal-bg').style.display = "flex";
  }
  render() {
    return (
      <nav className ="navbar row_flex">
        <div className ="nav_left">
          <Link to="/"><img src = {logo} alt="logo" className="nav_logo"/></Link>
        </div> 
        <div className ="nav_mid">
          <SearchBar/>
        </div>   
        <div className ="nav_right row_flex">
          <div>
            <button onClick = {this.signInButtonHandler} className="signup-button">
              {this.props.signedInUser || "Sign In"}
            </button>
          </div>
          <div>
            <Link  to="/cart">
              <div className="cart-image">
                <div className="cart-counter">{this.props.cartNo}</div>
              </div>
            </Link>
          </div>
        </div> 
      </nav>
    );
  }
}

export default connect((storeState) => ({
  signedInUser: storeState.signedInUser,
  cartNo: storeState.cart_products.length
})) (Navbar);