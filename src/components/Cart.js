import React, { Component } from 'react';
import {connect} from 'react-redux'
import "./Cart.css"
import productActions from '../reducers/productReducer';


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

  displayQty(qty) {
    console.log({qty:qty});
    const optionList = [...Array(qty).keys()];
    return (
      <div>
        <select  value ={this.state.value}>
          {
            optionList.map(option => <option value={option+1} key={option+1} selected={option+1 === qty}>{option+1}</option>)
          }
        </select>
      </div>
    )
  }


  displayCartProducts() {
    console.log(this.props.cartProducts)
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
                  Product Availability: {product.stock }
                </div>
                <div>
                  Product Color: {product.option.color}
                </div>
                <div>
                  {this.displayQty(product.qty)}
                </div>
                <div>
                  <button onClick={()=>this.props.removeProduct(product.id)}>Remove</button>
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
    console.log(this.props.cartProducts)
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
  state => (
    {cartProducts: Object.keys(state.cart_products).map(sku => {
      let sku_obj = state.skus[sku];
      let product = state.products[sku_obj.pid]
      return {
        ...product,
        ...sku_obj,
        qty: state.cart_products[sku]
      }
    })}
  ),
  {removeProduct: productActions.removeCartActionCreator}
) (Cart);