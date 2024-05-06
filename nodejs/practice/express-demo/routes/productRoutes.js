import express from "express";
// import products from "./model/products.js"

const router=express.Router();

router.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
    ];
    res.json(products); // Automatically converts to JSON and writes to response
});

router.post('api/products',(req,res)=>{
    const newProduct = req.body; // Assuming the request body contains the new product details
    products.push(newProduct); // Add the new product to the products array
    res.status(201).json(newProduct); // Respond with the added product and status code 201 (Created)
    res.json(products);
});


export default router;
