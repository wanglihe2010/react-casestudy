import {handleActions} from 'redux-actions';
import Product from '../models/Product';
import Sku from '../models/Sku';
import convertArrayToObject from '../convertArrayToObject'


const addProductToCart = "ADD_PRODUCT_TO_CART";
const removeCartProduct = "REMOVE_CART_PRODUCT";
const updateLoggedInUser = "UPDATE_LOGGEDIN_USER";
const fetchProductsSuccess = "FETCH_PRODUCTS_Success";
const fetchProductsFail = "FETCH_PRODUCTS_Fail";
const fetchProducts = "FETCH_PRODUCTS";

//TODO: what if products and skus does not match 
const initState = {
  products: convertArrayToObject([
    new Product("p1","iphone11","apple iPhone 11","iphone 11 feature"),
    new Product("p2","apple watch","apple watch description","apple watch feature")
  ]),
  skus: convertArrayToObject([
    new Sku("s1","p1",999,10,"iphone11Pro.jpg",{
      color: "black",
      memory: "32gb"
    }),
    new Sku("s2","p1",999,10,"iphone11Pro.jpg",{
      color: "white",
      memory: "32gb"
    }),
    new Sku("s3","p1",999,10,"iphone11Pro.jpg",{
      color: "red",
      memory: "32gb"
    }),
    new Sku("s4","p2",199,10,'airpodPro.jpg',{
      color: "black",
      waist: "42mm"
    })
  ]),
  // cart is only the sku number
  cart_products: [],
  signedInUser: ""
};


const productActions = {
  fetchProductActionCreator: () => ({
    type: fetchProducts
  }),
  successFetchProductActionCreator: (fetchData) => {
    return ({
    type: fetchProductsSuccess,
    param: fetchData
  })},
  failFetchProductActionCreator: () => {
    return ({
    type: fetchProductsFail
  })},
  addtoCartActionCreator: (product) => ({
    type: addProductToCart,
    param: product
  }),
  removeCartActionCreator: (productId) => ({
    type: removeCartProduct,
    param: productId
  }),
  updateUserActionCreator: (username) => ({
    type: updateLoggedInUser,
    param: username
  }),
  reducer: handleActions({
    [fetchProductsSuccess]: (state,action) => ({
      ...state,
      products: action.param
    }),
    [fetchProductsFail]: (state, action) => ({
      ...state
    }),
    [addProductToCart]: (state,action) => {
      console.log(state);
      return ({
      ...state,
      cart_products: [...state.cart_products, action.param]
    })},
    [removeCartProduct]: (state, action) => {
      // get the index and remove
      console.log("remove reducer called" + action.param);
      let newState = ({
        ...state,
        cart_products: state.cart_products.filter((product,i) => i!== action.param )
      });
      console.log(newState);
      return newState;},
    [updateLoggedInUser]: (state, action) => ({
      ...state,
      signedInUser: action.param
    })
    },
  initState)
}

export default productActions;