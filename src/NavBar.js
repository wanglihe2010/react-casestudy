import {Link} from 'react-router-dom'
import logo from './logo.svg'
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
      <nav className ="navbar">
        <div className ="nav_left">
          <Link to="/"><img src = {logo} alt="logo" className="nav_logo"/></Link>
        </div> 
        <div className ="nav_right">
          <div className ="signup">
            <button onClick = {this.signInButtonHandler}>
              {this.props.signedInUser || "Sign In"}
            </button>
          </div>
          <div className="cart">
            <Link className="mid-position" to="/cart">
              <div className="cart-image">
                <div className="cart-counter">{this.props.cartNo}</div>
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
}

export default connect((storeState) => ({
  signedInUser: storeState.signedInUser,
  cartNo: storeState.cart_products.length
})) (Navbar);