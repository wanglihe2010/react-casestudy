import React, { Component } from 'react';
import {connect} from 'react-redux'
import "./Cart.css"
import productActions from './reducers/productReducer';
import Product from './models/Product';


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: props.cartProducts
    }
  }

  displayCartProducts() {
    return this.state.cartProducts.map(
      (product: Product) => {
        return (
          <div className="item_container">
            <div className="item_image">
              image here 
            </div>
            <div className="item_description">
              <div>
                Product Title: {product.name}
              </div>
              <div>
                Product Price: ${product.price}
              </div>
              <div>
                Product Availability: {product.availability}
              </div>
              <div>
                Product Color: {product.color}
              </div>
            </div>
          </div>
        )
      }
    )
  }

  render() {
    return (
      <div>
        <div>
          <h4>Order Review</h4>  
        </div>
        <div>
          {this.displayCartProducts()}
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  cartProducts: state.cart_products
})) (Cart);