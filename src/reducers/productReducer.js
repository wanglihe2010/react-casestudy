import {handleActions} from 'redux-actions';
import Product from '../models/Product';
import Sku from '../models/Sku';


const addProductToCart = "ADD_PRODUCT_TO_CART";
const removeCartProduct = "REMOVE_CART_PRODUCT";
const updateLoggedInUser = "UPDATE_LOGGEDIN_USER"

const initState = {
  products: [
    new Product("p1","iphone11","apple iPhone 11","iphone 11 feature"),
    new Product("p2","apple watch","apple watch description","apple watch feature")
  ],
  skus: [
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
  ],
  cart_products: [],
  signedInUser: undefined
};


const productActions = {
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
    [addProductToCart]: (state,action) => ({
      ...state,
      cart_products: [...state.cart_products, action.param]
    }),
    [removeCartProduct]: (state, action) => {
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