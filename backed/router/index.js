import RouterCategory from "./category.route.js";
import RouterProduct from "./product.route.js";
const router=(app)=>
{
    app.use('/api/product',RouterProduct);
    app.use('/api/category',RouterCategory)
}
export default router;