import mongoose from "mongoose"
export const connectDB= async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongodb connected: ${conn.connection.host}`)
        console.log("  DB Name:", conn.connection.name);
       

    } catch (error) {
        console.log("Mongodb connection error:",error)
    }
};