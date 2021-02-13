
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/product', productRoutes);
app.use('/cart', cartRoutes);


const CONNECTION_URL='mongodb+srv://jagdishmeghwal:jagdish123@cluster0.p7ob2.mongodb.net/<productdb>?retryWrites=true&w=majority';
const PORT =  5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);