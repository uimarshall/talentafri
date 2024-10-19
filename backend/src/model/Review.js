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
    product: {
      type: ObjectId, // This means, what product are you reviewing.
      required: true,
      ref: 'Product',
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

const Review = model('Review', reviewSchema);

export default Review;
