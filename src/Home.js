import React, { Component } from 'react';
import './Home.css'
import { connect } from 'react-redux';
import productActions from './reducers/productReducer';
import queryString from 'query-string'
import {Link} from 'react-router-dom'

class Home extends Component{

  displayProducts() {
    const searchKey = queryString.parse(this.props.location.search).key || "";
    return this.props.products.filter(item=>item.name.toLowerCase().includes(searchKey.toLowerCase())).
    map((item,index) => {
      return (
        <div className="productCard" key={index}>
          <Link className ="productDesription" to={"/products/" + item.id}>
            <div className="productImage"> 
              <img src = {require('./images/product-images/' + item.img)} alt="product image"></img>
            </div>
            <div>
              {item.name}
            </div>
            <div>
              ${item.price}
            </div>
          </Link>
          <div>
            <button onClick={()=>this.props.addToCart(item)}>Add to Cart</button>
          </div>
        </div>
      )
    })
  }

  render() {
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
  (state, ownProps)=>({products: state.products}),
  {addToCart: productActions.addtoCartActionCreator}
) (Home);