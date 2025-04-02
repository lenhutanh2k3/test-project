import Product from '../model/product.model.js';
import Category from '../model/category.model.js'
import PAGE_SIZE from '../utils/page.js' // Tên hằng số PAGE_SIZE để dễ hiểu hơn

const Product_controller = {
    getAll: async (req, res) => {
        try {
            const { category_id, name_product, min_price, max_price, page = 1 } = req.query;
            const bodyQuery = {};

            if (category_id) bodyQuery.category = category_id;


            if (name_product) {
                bodyQuery.name = {
                    $regex: `.*${name_product}.*`,
                    $options: "i", 
                };
            }

            // Kiểm tra giá
            if (min_price && max_price) {
                bodyQuery.price = {
                    $gte: min_price,
                    $lte: max_price
                };
            }

            // Lấy dữ liệu sản phẩm với phân trang
            const products = await Product.find(bodyQuery)
                .skip(PAGE_SIZE * (page - 1))
                .sort({
                    "name": 1,
                })
                .limit(PAGE_SIZE)
                .exec();

            // Lấy tổng số lượng sản phẩm
            const count = await Product.countDocuments(bodyQuery);

            // Tính số trang
            const totalPages = Math.ceil(count / PAGE_SIZE);

            return res.status(200).json({
                message: "Successfully",
                current_page: page,
                total_page: totalPages,
                data: products
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server Error" });
        }
    },

    createProduct: async (req, res) => {
        try {
            const data = req.body;
            const { category } = req.body;

            // Kiểm tra xem category có tồn tại không
            const check_category = await Category.findOne({ "_id": category });

            if (!check_category) {
                return res.status(403).json({ message: "Không tìm thấy category" });
            }

            const newProduct = new Product(data);
            await newProduct.save();
            return res.status(201).json({ message: "Successfully", data: newProduct });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server Error" });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });

            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }

            return res.status(200).json({ message: "Successfully", data: updatedProduct });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server Error" });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndDelete(id);

            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            return res.status(200).json({ message: "Delete successfully" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server Error" });
        }
    }
};

export default Product_controller;
