import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productName: String,
    description: String,
    selectedImage: String,
    quantity:Number,
    price:Number
})

var Product = mongoose.model('Product', productSchema);

export default Product;