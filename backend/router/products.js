const express = require ('express');
const Product = require('../models/Product')

const router = express.Router();

const products = {
    p1: new Product("p1","iphone12","apple iPhone 11","iphone 11 feature"),
    p2: new Product("p2","apple watch2","apple watch description","apple watch feature")
}

router.get('',(req,res,next) => {
    console.log(req);
    res.status(200).json(products);
})

router.get('/:pid',(req,res,next)=> {
    res.status(200).json(products[req.param.pid])
})

module.exports = router;