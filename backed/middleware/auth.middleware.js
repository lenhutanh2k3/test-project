import jwt from 'jsonwebtoken'
import ErrorReponse  from '../helper/Error.js'
import Account from '../model/account.model.js';
const auth_middleware =async(req, res, next)=>
{
    const authorization = req.headers.authorization; 
    if (!authorization.startsWith("Bearer"))
        throw new ErrorReponse(400,'Invalid token');
    const token = authorization.split(' ')[1];
    console.log({token})
    const decode = jwt.verify(token,"nhutanh");
    console.log({decode});
    const account =await Account.findById(decode._id);
    if (!account)
        throw new ErrorReponse(400,"Khong tim thay");
    req.account =account;
    next();
}
export default auth_middleware;