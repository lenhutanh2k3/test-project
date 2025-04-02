import express from 'express'
import dotenv from 'dotenv'
import router from './router/index.js';
import connect from './config/db.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
connect();
router(app);
app.listen(PORT,()=>
{
    console.log(`Server is running PORT:${PORT}`);
})