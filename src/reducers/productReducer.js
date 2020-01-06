import {handleActions} from 'redux-actions';
import Product from '../models/Product';

const getAllProduct = "GET_ALL_PRODUCTS";
const getAllCartProduct = "GET_ALL_CART_PRODUCTS";
const addProductToCart = "ADD_PRODUCT_TO_CART";

const productActions = {
  getAllProductsActionCreator: (prodcuts) => ({
    type: getAllProduct,
    param: prodcuts
  }),
  getAllCarProdActionCreator: (cart_products) => ({
    type: getAllCartProduct,
    param: cart_products
  }),
  addtoCartActionCreator: (product) => ({
    type: addProductToCart,
    param: product
  }),
  reducer: handleActions({
    [getAllProduct]: (state, action) => ({
      ...state,
      products: action.param
    }),
    [getAllCartProduct]: (state, action) => ({
      ...state,
      cart_products: action.param
    }),
    [addProductToCart]: (state,action) => ({
      ...state,
      cart_products: [...state.cart_products, action.param]
    }) 
  },
  {products: [
    new Product(1,'iPhone',699),
    new Product(2,'airpod',250)
    ],
    cart_products: [
      new Product(1,'iPhone',699,'in stock','blue'),
      new Product(2,'airpod',250,'in stock','white')
    ],
    signedInUser: "undefined"
  })
}

export default productActions;