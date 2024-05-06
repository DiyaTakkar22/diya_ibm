import express from 'express';
import { getProducts, addProducts, updateProduct, deleteProduct } from "../controllers/productController.js"

const router = express.Router();

// GET all products
router.route('/').get(getProducts);

// POST a new product
router.route('/').post(addProducts);

// PUT update a product by ID
router.route('/:id').put(updateProduct);

// DELETE a product by ID
router.route('/:id').delete(deleteProduct);

export default router;
