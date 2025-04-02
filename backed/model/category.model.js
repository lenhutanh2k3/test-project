import mongoose from "mongoose";

const CategoryShema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        }
    },{timestamps:true}
)
const Category = new mongoose.model("Category",CategoryShema);
export default Category;