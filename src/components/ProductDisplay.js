import React, { Component } from 'react';
import './ProductDisplay.css';
import {connect} from 'react-redux';
import queryString from 'query-string';
import productActions from '../reducers/productReducer';

class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state= {
      selectProductSkuObj : this.props.skus.filter(sku => sku.id == queryString.parse(this.props.location.search).sku)[0] || this.props.skus[0],
      optionToSkus:this.props.skus.reduce((obj, sku) => ({...obj, [JSON.stringify(sku.option)]: sku.id}),{}),
      qty: 1
    }
  }

  displayColors() {
    return this.props.skus.map((sku, index)=> {
      return (
        <div className="color-container" key={index}>
          <input type="radio" name="colorOption" value={index} id={index} onChange={this.handleColorOption} checked={this.state.selectProductSkuObj.id == sku.id}/>
          <label for={index}>
            <div className="select-indicator"/>
            <div className="priceTag">{sku.option.color}</div>
          </label>

            {/* <button className="color-button" style ={{backgroundColor: sku.option.color}}/>
 
          <div className="color-name">
            {sku.option.color}
          </div> */}
        </div>
      )
    })
  }

  displayQty() {
    const optionList = [...Array(Math.min(this.state.selectProductSkuObj.stock,5)).keys()];
    return (
      <div>
        <select onChange={this.handleQtyOption} value ={this.state.value}>
          <option >qty</option>
          {
            optionList.map(option => <option value={option+1} key={option+1} selected={option===0}>{option+1}</option>)
          }
        </select>
      </div>
    )
  }

  handleAddToCart = (event) => {
    if(this.state.qty !== 'qty') {
      this.props.addToCart({sku:this.state.selectProductSkuObj.id, qty:this.state.qty})
    }
  }

  handleQtyOption = (event) => {
    this.setState({
      qty:Number(event.target.value)
    })
  }

  handleColorOption = (event) => {
    console.log(event.currentTarget.value)
    this.setState({
      selectProductSkuObj: this.props.skus[event.currentTarget.value]
    })
  }
  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="wrapper">
        <div className="productTitle">
          <h2>prodcut title</h2>
        </div>
        <div className="productInfo">
          <div className= "product-image-container">
            <img src={require('../images/product-images/' + this.props.skus[0].img)} alt="product image"></img>
          </div>
          <div className= "productDescription">
            <div><h2>{this.props.product.name}</h2></div>
            <div><h2>{this.props.product.description}</h2></div>
            <div>
              <span>{this.state.selectProductSkuObj.stock>0? "in stock": "sold out"}</span>
              <span className="float_right">SKU#: {this.state.selectProductSkuObj.id}</span>
            </div>
            <div>
              <hr/>
            </div>
            <div className="colors-qty-container">
              <div className="colors-container">
                {this.displayColors()}
              </div>
              <div className="qty-container">
                {this.displayQty()}
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
        <div className="row-middle">
          <button className="add-to-cart" onClick={this.handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    );
  }
}

export default connect(
  (storeState, ownProps)=>({
    skus: Object.values(storeState.skus).filter(sku=>sku.pid == ownProps.match.params.id),
    product: storeState.products[ownProps.match.params.id]
  }),
  {addToCart: productActions.addtoCartActionCreator}
) (ProductDisplay);