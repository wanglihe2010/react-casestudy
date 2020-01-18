const express = require('express');
const productsRoutes = require('./router/products')

const app = express();

app.use('/api/products',productsRoutes);



module.exports = app;