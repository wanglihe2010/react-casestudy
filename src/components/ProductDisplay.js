import React, { Component } from 'react';
import './ProductDisplay.css';
import {connect} from 'react-redux';
import queryString from 'query-string';
import productActions from '../reducers/productReducer';

class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state= {
      selectProductSkuObj : this.props.skus.filter(sku => sku.id === queryString.parse(this.props.location.search).sku)[0] || this.props.skus[0],
      optionToSkus:this.props.skus.reduce((obj, sku) => ({...obj, [JSON.stringify(sku.option)]: sku.id}),{}),
      qty: 1
    }
  }

  displayColors() {
    return this.props.skus.map((sku, index)=> {
      return (
        <div className="color-container" key={index}>
          <input type="radio" name="colorOption" value={index} id={index} onChange={this.handleColorOption} checked={this.state.selectProductSkuObj.id === sku.id}/>
          <label for={index}>
            <div className="color-block" style={{backgroundColor: sku.option.color}}>
              <div className= "color-block-inner"  style={{backgroundColor: sku.option.color}}/>
            </div>
            <div className="priceTag">{sku.option.color}</div>
          </label>
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
      let qtyList = [...Array(this.state.qty).keys()]
      qtyList.map(number => this.props.addToCart(this.state.selectProductSkuObj.id))
      
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
      <div className="product-detail-wrapper">
        <div className="productTitle">
          <h2>prodcut title</h2>
        </div>
        <div className="productInfo">
          <div className= "product-image-container">
            <img src={require('../images/product-images/' + this.props.skus[0].img)} alt={this.props.skus[0].img}></img>
          </div>
          <div className= "productDescription">
            <div><h2>{this.props.product.name}</h2></div>
            <div><h2>{this.props.product.description}</h2></div>
            <div className="left-right-container">
              <span className="margin-horiental-5 ">{this.state.selectProductSkuObj.stock>0? "in stock": "sold out"}</span>
              <span className="margin-horiental-5">SKU#: {this.state.selectProductSkuObj.id}</span>
            </div>
            <div>
              <hr/>
            </div>
            <div className="left-right-container">
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
                  <div className="priceTag">${this.state.selectProductSkuObj.price}</div>
                </label>
              </div>
              <div className="radio-button-container">
                <input type="radio" name="priceOption" value="montPrice" id="option2"/>
                <label for="option2">
                  <div className="select-indicator"/>
                  <div className="priceTag">${(this.state.selectProductSkuObj.price / 24).toFixed(2)}/mo.</div>
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
    skus: Object.values(storeState.skus).filter(sku=>sku.pid === ownProps.match.params.id),
    product: storeState.products[ownProps.match.params.id]
  }),
  {addToCart: productActions.addtoCartActionCreator}
) (ProductDisplay);