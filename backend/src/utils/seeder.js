/* eslint-disable import/extensions */

// /* eslint-disable no-console */
import 'dotenv/config';

import connectDb from '../config/db.js';
// import products from '../data/products.json' assert { type: 'json' };

import Product from '../model/Product.js';

connectDb();

const seedProducts = async () => {
  try {
    // Delete all products in the database before seeding new ones
    await Product.deleteMany();
    console.log('Products deleted successfully');
    // Insert new products imported from the json file into the database
    // await Product.insertMany(products);
    console.log('Products added successfully');
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
