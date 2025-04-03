import Account from '../model/account.model.js';

const Account_Controller ={

    createAccount:async (req,res) => {
            const body = req.body;
            const account =await Account.create(body);
            return res.status(201).json(account);
    },
    getAllAccount:async(req,res)=>
    {
        const accounts = await Account.find();
        return res.status(200).json(accounts);
    }
}
export default Account_Controller;