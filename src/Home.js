import React, { Component } from 'react';
import './Home.css'
import { connect } from 'react-redux';

class Home extends Component{

  
  constructor(props) {
    super(props);
    // this.state = {
    //   products : [{
    //     name: "product1",
    //     price: 32,
    //   }, 
    //   {
    //     name: "product2",
    //     price: 33,
    //   }, 
    //   {
    //     name: "product3",
    //     price: 34,
    //   }, 
    //   {
    //     name: "product4",
    //     price: 35,
    //   }]
    // }
    this.state = {
      products : props.products
    }
  }

  displayProducts() {
    return this.state.products.map(item => {
      return (
        <div className="productCard">
          <div className="productImage"> 
            <img alt="product image"></img>
          </div>
          <div>
            {item.name}
          </div>
          <div>
            ${item.price}
          </div>
          <div>
            <button>Add to Cart</button>
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

export default connect(state=>({products: state.products})) (Home);