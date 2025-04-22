/* eslint-disable import/extensions */
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import ErrorHandler from '../utils/errorHandler.js';
import generateToken from '../utils/generateToken.js';

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

  // const token = newUser.getJwtToken();

  // return res.status(201).json({
  //   success: true,
  //   message: 'User registered successfully',
  //   user: newUser,
  //   token,
  // });
  return generateToken(newUser, 201, res);
});

// @desc: Login a user
// @route: /api/v1/users/login
// @access: protected

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // Check if email and password is entered in by user
  if (!email || !password) {
    next(new ErrorHandler('Please enter email and password', 400));
    return;
  }

  // Find user in database
  const userFound = await User.findOne({ email }).select('+password');
  if (userFound == null) {
    next(new ErrorHandler('Invalid email or password', 401));
    return;
  }

  // Check if password is correct or not
  const isPasswordMatched = await userFound.comparePassword(password);
  if (!isPasswordMatched) {
    next(new ErrorHandler('Invalid email or password', 401));
    return;
  }

  // If everything is correct, then send json web token to user
  // const token = userFound.getJwtToken();

  // res.status(200).json({
  //   success: true,
  //   message: 'User logged in successfully',
  //   token,
  // });
  generateToken(userFound, 200, res);
});

export { registerUser, loginUser };
