import React, { Component } from 'react';
import './Home.css'
import { connect } from 'react-redux';
import productActions from './reducers/productReducer';
import queryString from 'query-string'
import {Link} from 'react-router-dom'

class Home extends Component{
  displayProduct(item, index) {
    {console.log(item)}
    return  (
      <div className="productCard" key={index}>
        <Link className ="productDesription" to={"/products/" + item.pid}>
          <div className="productImage"> 
            <img src = {require('./images/product-images/' + item.img )} alt="product image"></img>
          </div>
          <div>
            {item.name}
          </div>
          <div>
            ${item.price}
          </div>
        </Link>
        <div>
          <button onClick={()=>this.props.addToCart(item.id)}>Add to Cart</button>
        </div>
      </div>
    )
  }

  displayProducts() {
    const searchKey = queryString.parse(this.props.location.search).key || "";
    // console.log(this.props.skus);
    return this.props.skus.map((sku,index) => {
      let item = {
        ...sku,
        name: this.props.products[sku.pid].name
      };
      return this.displayProduct(item,index);
    })
  }

  render() {
    {console.log(this.props.products)}
    return (
      <div>
        This is home page !
        <div className="wrapper">
          {this.displayProducts()}
        </div>
      </div>
    )
  }
}

export default connect(
  (state)=>({
    products: state.products.reduce((products, product) => ({...products, [product.id]: product}), {}), 
    skus: state.skus
  }),
  {addToCart: productActions.addtoCartActionCreator}
) (Home);