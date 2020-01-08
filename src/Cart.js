import React, { Component } from 'react';
import {connect} from 'react-redux'
import "./Cart.css"
import productActions from './reducers/productReducer';


class Cart extends Component {
  constructor(props) {
    super(props);
    console.log("cart component loaded")
    console.log(props);
    this.state = {
      cartProducts: props.cartProducts,
      removeProduct: props.removeProduct
    }
  }


  displayCartProducts() {
    if(this.props.cartProducts.length > 0) {
      return this.props.cartProducts.map(
        (product,index) => {
          return (
            <div className="item_container" key={index}>
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
                <div>
                  <button onClick={()=>this.props.removeProduct(index)}>Remove</button>
                </div>
              </div>
            </div>
          )
        }
      )
    } else {
      return (
        <div>
          Your cart is empty
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {console.log("page render")}
        {console.log(this.props)}
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

export default connect(
  state => ({cartProducts: state.cart_products}),
  {removeProduct: productActions.removeCartActionCreator}
) (Cart);