const express = require ('express');

const router = express.Router();

const products = {'pid1': 1,'pid2':2}

router.get('',(req,res,next) => {
    res.status(200).json(products);
})

router.get('/:pid',(req,res,next)=> {
    res.status(200).json(products[req.param.pid])
})

module.exports = router;