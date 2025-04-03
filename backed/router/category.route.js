import express from 'express';
import Category_controller from '../controller/category.controller.js';
import auth_middleware from '../middleware/auth.middleware.js';
import role from '../middleware/role.middleware.js'
const RouterCategory = express.Router();

RouterCategory.get('/',Category_controller.getAll);
RouterCategory.post('/',auth_middleware,role("admin"),Category_controller.createCategory);
RouterCategory.put('/:id',Category_controller.updateCategory);
RouterCategory.delete('/:id',Category_controller.deleteCategory);
export default RouterCategory;