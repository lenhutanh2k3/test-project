import Account from '../model/account.model.js';
import ErrorReponse from '../helper/Error.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const Auth = {

    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const account = await Account.findOne({ username });
            if (!account)
                throw new ErrorReponse(400,"TK hoac Mk khong dung"); 
            if (!bcrypt.compareSync(password,account.password))
                throw new ErrorReponse(400,"Tk hoac Mk khong dung");

            //jwt
            const payload ={
                _id: account._id,
                username: account.username,
                role: account.role
            };

            const token = jwt.sign(payload,"nhutanh",{expiresIn:"10m"});


            return res.status(200).json({
                statusCode:200,
                message:"Dang nhap thanh cong",
                ...payload,
                jwt:token
            })
        } catch (error) {
            throw new ErrorReponse(500,"Error Inveral")
        }
    },
    register:async(req,res)=>
    {
        try {
            const data = req.body;
            const account = await Account.create(data);
            return res.status(201).json(account);
        } catch (error) {
            
        }
    }
}
export default Auth;