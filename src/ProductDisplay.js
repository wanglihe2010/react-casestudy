import React, { Component } from 'react';
import './ProductDisplay.css'
import {connect} from 'react-redux'

class ProductDisplay extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h2>prodcut title</h2>
        </div>
        <div className="productInfo">
          <div className= "productImage">

          </div>
          <div className= "productDescription">

          </div>
        </div>
        <div className="productRating">
          <div></div>
        </div>
      </div>
    );
  }
}

export default connect(
  (storeState, ownProps)=>({product: storeState.products.filter(item=>item.id == ownProps.match.params.id)})
) (ProductDisplay);