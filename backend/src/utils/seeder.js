/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */

// /* eslint-disable no-console */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';

import connectDb from '../config/db.js';
// import products from '../data/products.json' assert { type: 'json' };
import Product from '../models/Product.js';

// Correctly resolve the path to products.json relative to this script
const __dirname = path.resolve();
const productsFilePath = path.resolve(__dirname, './backend/src/data/products.json');

// Read and log the contents of the products.json file
// fs.readFile(productsFilePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading products.json:', err.message);
//     return;
//   }
//   console.log('Contents of products.json:', JSON.parse(data));
// });

// Read the contents of the products.json file and store it in a variable
let products = [];
try {
  const data = fs.readFileSync(productsFilePath, 'utf8'); // Synchronous read
  products = JSON.parse(data);
  console.log('Contents of products.json:', products);
} catch (err) {
  console.error('Error reading products.json:', err.message);
  process.exit(1); // Exit if the file cannot be read
}

connectDb();

const seedProducts = async () => {
  try {
    // Delete all products in the database before seeding new ones
    await Product.deleteMany();
    console.log('Products deleted successfully');
    // Insert new products imported from the json file into the database
    await Product.insertMany(products);
    console.log('Products added successfully');
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
