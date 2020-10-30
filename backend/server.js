const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// routes
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

// middleware
const { notFound, errorHandler } = require('./middleware/error');

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

// env
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));