import RouterCategory from "./category.route.js";
import RouterProduct from "./product.route.js";
import RouterAccount from "./account.route.js";
import RouterAuth from "./auth.route.js";
const router=(app)=>
{
    app.use('/api/product',RouterProduct);
    app.use('/api/category',RouterCategory);
    app.use('/api/account',RouterAccount);
    app.use('/api/auth',RouterAuth)
}
export default router;