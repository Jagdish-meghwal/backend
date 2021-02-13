import mongoose from 'mongoose';


const cartSchema = mongoose.Schema({
    quantity:Number,
    createdAt: {
        type: Date,
        default: Date.now
      }
});


var Cart = mongoose.model('Cart', cartSchema);

export default Cart;