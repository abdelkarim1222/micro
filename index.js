const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// define routes and their ports 
const routes = {
    '/categorie': 'http://localhost:5000',
    '/job': 'http://localhost:5001', 

};

// create a proxy for each route 
const app = express();
for(const route in routes){
    const target = routes[route];
    app.use(route, createProxyMiddleware({target}));
}

// start the proxy
const PORT = 5003;
app.listen(PORT, () => {
    console.log(`Api-gateway server listening on port ${PORT}`);
}
);

