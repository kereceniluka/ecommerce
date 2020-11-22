const mongoose = require('mongoose');
const dotenv = require('dotenv');

// DB
const connectDB = require('./config/db');

// data
const users = require('./data/users');
const products = require('./data/products');

// models
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser };
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!');
        process.exit();
    } 
    catch(error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } 
    catch(error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

process.argv[2] === '-d' ? destroyData() : importData();