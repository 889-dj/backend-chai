import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

// second approach
const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // we print this connection instance to get more info about this object
        // this is done to ensure that i m connected to my production server DB 
        console.log(`\n MONGODB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}

export default connectDB