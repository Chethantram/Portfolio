import env from 'dotenv';
env.config();
import mongoose from "mongoose";

const connectDb = async()=> {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Db connected");
    
}
export default connectDb;

