import {handleActions} from 'redux-actions';
import Product from '../models/Product';


const addProductToCart = "ADD_PRODUCT_TO_CART";
const removeCartProduct = "REMOVE_CART_PRODUCT";
const updateLoggedInUser = "UPDATE_LOGGEDIN_USER"

const initState = {
  products: [
    new Product(1,'iPhone',699,'in stock','blue','iphone11Pro.jpg'),
    new Product(2,'airpod',250,'in stock','white','airpodPro.jpg')
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