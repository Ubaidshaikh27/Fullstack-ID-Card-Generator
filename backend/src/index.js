import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
    try {
        const connectionInstanse = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected: ${connectionInstanse.connection.host}`);
        
    } catch (error) {
        console.log("Mongo connection failed: ", error)
        process.exit(1)
    }
}

export default connectDB;