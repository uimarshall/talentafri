/* eslint-disable import/extensions */
// eslint-disable-next-line import/prefer-default-export

import Product from '../model/Product.js';
import ErrorHandler from '../utils/errorHandler.js';

const newProduct = async (req, res, next) => {
  const productCreated = await Product.create(req.body);
  res.status(201).json({ success: true, productCreated });
};

const getAllProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    data: products,
    count: products.length,
    message: 'Products successfully fetched',
  });
};

// @desc: Get single products - For product details
// @route: /api/v1/product/:productId(This url has a parameter called 'productId')
// @access: public
/* The parameter name(productId) must be consistent with
what is passed into the route(router.get('/:productId', getSingleProduct);)
*/

const getSingleProduct = async (req, res, next) => {
  const singleProductFound = await Product.findById(req.params.productId);

  if (!singleProductFound) {
    // return res.status(404).json({
    //   success: false,
    //   message: 'Product not found',
    // });
    return next(new ErrorHandler('Product not found', 404));
  }

  return res.status(200).json({
    success: true,
    data: singleProductFound,
    message: 'Product successfully fetched',
  });
};

// @desc: Update product
// @route: /api/v1/admin/product/:id
// @access: private

const updateProduct = async (req, res, next) => {
  let productToBeUpdated = await Product.findById(req.params.id);
  if (!productToBeUpdated) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  productToBeUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  return res.status(200).json({ success: true, productToBeUpdated });
};

// Delete a product
// @desc: Delete product
// @route: /api/v1/admin/product/:id
// @access: private
const deleteProduct = async (req, res, next) => {
  const productToBeDeleted = await Product.findById(req.params.id);
  if (!productToBeDeleted) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  // TODO: Remove the images associated with the product
  await Product.findByIdAndDelete(productToBeDeleted);
  return res.status(200).json({ success: true, message: 'Product successfully deleted' });
};

export { getAllProducts, newProduct, getSingleProduct, updateProduct, deleteProduct };
