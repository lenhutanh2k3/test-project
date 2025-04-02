import express from 'express';
import Category_controller from '../controller/category.controller.js'
const RouterCategory = express.Router();

RouterCategory.get('/',Category_controller.getAll);
RouterCategory.post('/',Category_controller.createCategory);
RouterCategory.put('/:id',Category_controller.updateCategory);
RouterCategory.delete('/:id',Category_controller.deleteCategory);
export default RouterCategory;