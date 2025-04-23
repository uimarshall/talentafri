/* eslint-disable import/extensions */
import express from 'express';

import {
  getAllProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from '../../controllers/productController.js';
import requireAuthentication from '../../middlewares/authMiddleware.js';

const router = express.Router();

// Create Products
router.post('/admin/product/new', newProduct);

// Get all products
router.get('/products', requireAuthentication, getAllProducts);

// Get single product
router.get('/product/:productId', getSingleProduct);

// Update product
router.put('/admin/product/:id', updateProduct);

// Delete product
router.delete('/admin/product/:id', deleteProduct);

export default router;
