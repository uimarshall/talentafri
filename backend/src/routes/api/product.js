import express from 'express';
// eslint-disable-next-line import/extensions
import { getAllProducts } from '../../controllers/productController.js';

const router = express.Router();

// Get all products
router.get('/', getAllProducts);

export default router;
