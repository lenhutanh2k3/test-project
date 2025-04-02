import Category from "../model/category.model.js";
import CategoryValidate from '../validations/category.valid.js'
const Category_controller = {

    getAll: async (req, res) => {
        try {
            const Categories = await Category.find();
            if (Categories)
                res.status(201).json({ "message": "Successfully", "data": Categories })
            else
                res.status(400).json({ "message": "Not found" })
        } catch (error) {
            console.log('Fail', error);
            res.status(500).json({ "message": "Loi" });
        }
    },
    createCategory: async (req, res) => {
        try {
            const { name } = req.body;
            const {error,value}= CategoryValidate(name);
            if(error)
            {
                return res.status(400).json({
                    message:"Khong tim thay",
                })
            }
            const category =await new Category(value);
            await category.save();
            res.status(201).json({ "message": "Create successfullly", "data": category });
        } catch (error) {
            console.log("Loi");
            res.status(500).json({ "message": error });
        }
    },
    updateCategory:async(req,res)=>
    {
        try {
            
            const {id}= req.params;
            const data = req.body
            const category = await Category.findByIdAndUpdate(id,data);
            if (category)
                res.status(201).json({"message":"Succesfully","data":category});
        } catch (error) {
            console.log(error);
        }
    },
    deleteCategory:async(req,res)=>
    {
        try {
            
            const {id}= req.params;
            const category = await Category.findByIdAndDelete(id);
            if (!category)
                res.status(201).json({"message":"Delete successfully"})
        } catch (error) {
            console.log(error);
        }
            
    }

}
export default Category_controller;