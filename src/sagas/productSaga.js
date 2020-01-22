import {put, takeLatest, call, delay} from 'redux-saga/effects';
import productActions from '../reducers/productReducer';
import Product from '../models/Product';
import axios from 'axios';

// function* getProductsFromApi() {
//     console.log('getProductFromApi called')
//     const res = yield axios.get('localhost:4000/api/products').then(data => console.log({myData: data}));
    
//     return res;
// }

const getDataFromApi = async () => {
    return await fetch('localhost:4000/api/products').then(res => res.json());
}

function* fetchProducts() {
    try {
        // yield delay(4000);
        const testData = yield fetch('localhost:4000/api/products');
        console.log({testData});
        const fetchData =  {
            p1: new Product("p1","iphone12","apple iPhone 11","iphone 11 feature"),
            p2: new Product("p2","apple watch2","apple watch description","apple watch feature")
        };
        // console.log({fetchData: fetchData.next()});
        yield put(productActions.successFetchProductActionCreator(fetchData));

    } catch (error) {
        console.log(error);
    }
}

export function* watchFetchProducts() {
    yield takeLatest("FETCH_PRODUCTS", fetchProducts)
}