import express from 'express';
import { addItem, getCart, updateItem } from '../controllers/cart.js';


const router = express.Router();

router.get('/', getCart);
router.post('/:id', addItem);
router.patch('/:id',updateItem);

export default router;