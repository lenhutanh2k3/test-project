import express from 'express';
import Account_Controller from '../controller/account.controller.js';
import asyncMiddleware from '../middleware/async.middleware.js';
const RouterAccount = express.Router();

RouterAccount.get('/',asyncMiddleware(Account_Controller.getAllAccount));
RouterAccount.post('/',asyncMiddleware(Account_Controller.createAccount));
export default RouterAccount;