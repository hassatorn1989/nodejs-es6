import express from "express";
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Index');
})

routes.get('/product', (req, res) => {
  res.send("product");
})

module.exports = routes;