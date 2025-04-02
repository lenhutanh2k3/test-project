import express from 'express';
import Product_controller from '../controller/product.controller.js';
const RouterProduct = express.Router();

RouterProduct.get('/',Product_controller.getAll);
RouterProduct.post('/',Product_controller.createProduct);
RouterProduct.put('/:id',Product_controller.updateProduct);
RouterProduct.delete('/:id',Product_controller.deleteProduct);
export default RouterProduct;