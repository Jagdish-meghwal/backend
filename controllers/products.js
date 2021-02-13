import express from 'express';
import mongoose from 'mongoose';

import Product from '../models/product.js';

const router = express.Router();

export const getProductList = async (req, res) => { 
    try {
        const productlist = await Product.find();
                
        res.status(200).json(productlist);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createProduct = async (req, res) => {
    const { productName, description, selectedImage, quantity, price} = req.body;

    const newProduct = new Product({ productName, description, selectedImage, quantity, price })

    try {
        await newProduct.save();

        res.status(201).json(newProduct );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { productName, description, selectedImage, quantity, price } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedProduct = { productName, description, selectedImage, quantity, price, _id: id };

    await Product.findByIdAndUpdate(id, Product, { new: true });

    res.json(updatedProduct);
}
export default router;