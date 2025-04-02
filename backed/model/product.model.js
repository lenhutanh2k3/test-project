import mongoose from 'mongoose';

const ProductShema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        require:true
    }
}, { timestamps: true });
const Product = new mongoose.model("Product",ProductShema);
export default Product;