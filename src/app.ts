import express from 'express';
import productsController from './controllers/products.controller';
import ordersController from './controllers/orders.controller';

const app = express(); 

app.use(express.json());

app.get('/products', async (req, res) => productsController.getProducts(req, res));
app.get('/orders', async (req, res) => ordersController.getOrders(req, res));

app.post('/products', async (req, res) => productsController.postProducts(req, res));

export default app;
