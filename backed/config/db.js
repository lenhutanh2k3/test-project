
import mongoose from 'mongoose';

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connect successfully !");
    } catch (error) {
        console.log("Fail connect", error);
    }
}
export default connect;