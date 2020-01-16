import {handleActions} from 'redux-actions';
import Product from '../models/Product';
import Sku from '../models/Sku';
import convertArrayToObject from '../convertArrayToObject'


const addProductToCart = "ADD_PRODUCT_TO_CART";
const removeCartProduct = "REMOVE_CART_PRODUCT";
const updateLoggedInUser = "UPDATE_LOGGEDIN_USER"

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
  // cart is {sku:qty}
  cart_products: {},
  signedInUser: ""
};


const productActions = {
  addtoCartActionCreator: (product) => ({
    type: addProductToCart,
    param: product
  }),
  removeCartActionCreator: (product) => ({
    type: removeCartProduct,
    param: product
  }),
  updateUserActionCreator: (username) => ({
    type: updateLoggedInUser,
    param: username
  }),
  reducer: handleActions({
    [addProductToCart]: (state,action) => {
      let newState =  ({
      ...state,
      cart_products: {...state.cart_products, [action.param.sku]: action.param.qty + (state.cart_products[action.param.sku] || 0) }
      });
      console.log(newState);
      return newState;
    },
    [removeCartProduct]: (state, action) => {
      delete state.cart_products[action.param]
      console.log({currState:state})
      // console.log("remove reducer called" + action.param);
      // let newState = ({
      //   ...state,
      //   cart_products: delete )
      // });
      // console.log(newState);
      return {...state}},
    [updateLoggedInUser]: (state, action) => ({
      ...state,
      signedInUser: action.param
    })
    },
  initState)
}

export default productActions;