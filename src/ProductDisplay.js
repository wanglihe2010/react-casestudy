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
            <div><h2>product title</h2></div>
            <div><h2>product description</h2></div>
            <div>
              <span>Availability</span>
              <span className="float_right">SKU#: </span>
            </div>
            <div>
              <hr/>
            </div>
            <div className="colors-qty-container">
              <div className="colors-container">
                <div className="color-container">
                  <div>
                    <button className="color-button"/>
                  </div>
                  <div className="color-name">
                    red
                  </div>
                </div>
              </div>
              <div className="qty-container">
                <select>
                  <option >qty</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div>
              <hr/>
            </div>
            <div className="rowFlex">
              <div className="radio-button-container">
                <input type="radio" name="priceOption" value="fullPrice" id="option1"/>
                <label for="option1">
                  <div className="select-indicator"/>
                  <div className="priceTag">9999</div>
                </label>
              </div>
              <div className="radio-button-container">
                <input type="radio" name="priceOption" value="montPrice" id="option2"/>
                <label for="option2">
                  <div className="select-indicator"/>
                  <div className="priceTag">20</div>
                </label>
              </div>
              
            </div>
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