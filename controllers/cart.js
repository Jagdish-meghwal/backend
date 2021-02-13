import express from 'express';
import mongoose from 'mongoose';
import Cart from '../models/cart.js';

const router = express.Router();

export const getCart = async (req, res) => { 
    try {
        const cart = await Cart.find();
                
        res.status(200).json(cart);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addItem = async (req, res) => {
    const { id } = req.params;
    const { quantity} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);
    const cartData = {
        
            _id: id,
            quantity: quantity
         
      };

    const item = new Cart(cartData)

    try {
        await item.save();

        res.status(201).json(item);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateItem = async (req, res) => {
    const { id } = req.params;
    const {  quantity } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    const updatedProduct = {  quantity,  _id: id };

    await Cart.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.json(updatedProduct);
}

export default router;