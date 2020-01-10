import React, { Component } from 'react';
import './ProductDisplay.css'
import {connect} from 'react-redux'

class ProductDisplay extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <div>
          <h2>prodcut title</h2>
        </div>
        <div className="productInfo">
          <div className= "product-image-container">
            <img src={require('./images/product-images/' + this.props.product.img)} alt="product image"></img>
          </div>
          <div className= "productDescription">
            <div>product title</div>
            <div>product description</div>
            <div>availability and sku</div>
            <div>
              color and qty
            </div>
            <div>price</div>
          </div>
        </div>
        <div className="productRating">
          <div>rating</div>
        </div>
        <div>
          feature
        </div>
        <div>
          details
        </div>
        <div>
          add to cart
        </div>
      </div>
    );
  }
}

export default connect(
  (storeState, ownProps)=>({product: storeState.products.filter(item=>item.id == ownProps.match.params.id)[0]})
) (ProductDisplay);