import mongoose from 'mongoose'
import role from '../utils/role.js'
import bcrypt from 'bcrypt';
const AccountShema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
      
    },
    role:{
        type: String,
        enum: [...Object.values(role)],
        default: role.USER
    }
},{timestamps:true})

// xoa password
AccountShema.set("toJSON",{
    transform:function(doc,ret,options){
        delete ret.password;
    }
});

AccountShema.pre("save",function(next){
    const account = this;
    if (account.password)
    {
        account.password =  bcrypt.hashSync(account.password,10);
    }
    next();
})


const Account = new mongoose.model("Account",AccountShema);
export default Account;