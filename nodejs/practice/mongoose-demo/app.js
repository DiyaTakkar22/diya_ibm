import express from 'express';
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"

const app=express();
app.use(express.json());
app.use('/api/products',productRoutes);
connectDB();
app.listen(3000,()=>console.log("server starter on port 3000"));