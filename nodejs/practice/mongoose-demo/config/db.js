import mongoose from 'mongoose';

//connecting to mongodb
const connectDB=async()=>{
    try{
       const conn=await mongoose.connect(`mongodb://localhost:27017/ibm`);
       console.log(`connected to mongodb,",${conn.connection.host}`);
    }
    catch(err){
      console.log(err);
    }
}
export default connectDB;