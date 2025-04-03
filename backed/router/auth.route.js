import exress from 'express'
import Auth from '../controller/auth.controller.js';

const RouterAuth = exress.Router();

RouterAuth.post('/login',Auth.login);
RouterAuth.post('/register',Auth.register);

export default RouterAuth;