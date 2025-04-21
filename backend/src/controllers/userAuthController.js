/* eslint-disable import/extensions */
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import ErrorHandler from '../utils/errorHandler.js';

// @desc Register a new user
// @route POST /api/v1/users/register
// @access Public
const registerUser = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, username, password, bio, location } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new ErrorHandler('User already exists', 400));
  }

  // check if password length is greater than 8.
  // if (password.length < 8) {
  //   return next(new ErrorHandler('Password must be at least 8 characters long', 400));
  // }

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    username,
    password,
    bio,
    location,
  });

  return res.status(201).json({
    success: true,
    message: 'User registered successfully',
    user: newUser,
  });
});

export default registerUser;
