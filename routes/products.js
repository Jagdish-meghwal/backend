import express from 'express';

import {  getProductList, createProduct,  updateProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/', getProductList);
router.post('/', createProduct);
router.patch('/:id', updateProduct);

export default router;