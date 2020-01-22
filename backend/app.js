const express = require('express');
const productsRoutes = require('./router/products')
// const cors = require('cors');

const app = express();

// app.use(cors({
//     origin: 'http://localhost:3000'
// }))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Method",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use('/api/products',productsRoutes);



module.exports = app;