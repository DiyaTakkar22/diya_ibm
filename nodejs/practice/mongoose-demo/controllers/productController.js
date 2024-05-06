import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
});

const addProducts = asyncHandler(async (req, res) => {
    let newProduct = req.body;
    if (!newProduct.name || !newProduct.price) {
        res.status(400).json({ msg: 'product name and price are missing' });
    }
    newProduct = await Product.create(newProduct);
    res.status(200).json(newProduct);
});

const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const exists = await Product.findById(id);
    if (!exists) {
        res.status(404).json({ msg: `product with ${id} does not exist` });
    }
    const productToBeUpdated = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, productToBeUpdated, { new: true });
    res.status(200).json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
        res.status(404).json({ msg: "product does not exist" });
    }
    await Product.deleteOne(product);
    res.status(200).json({ msg: 'product deleted' });
});

export { getProducts, addProducts, updateProduct, deleteProduct };
