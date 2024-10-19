import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: ObjectId,
      required: true,
      ref: 'User',
    },

    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for this product.'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price for this product.'],
      trim: true,
      maxlength: [5, 'Price cannot exceed 5 characters.'],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, 'Please enter a description for this product.'],
      maxlength: [2064, 'Description cannot exceed 2064 characters.'],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, 'Please provide a category for this product.'],
    },
    stock: {
      type: Number,
      required: [true, 'Please provide a stock for this product.'],
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        type: ObjectId,
        ref: 'Review',
      },
    ],
    // reviews: [reviewSchema],

    // reviews: [
    //   {
    //     user: {
    //       type: ObjectId,
    //       ref: 'User',
    //       required: true,
    //     },
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //     rating: {
    //       type: Number,
    //       required: true,
    //     },
    //     comment: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
    user: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

const Product = model('Product', productSchema);
export default Product;
