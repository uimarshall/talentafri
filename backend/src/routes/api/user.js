/* eslint-disable import/extensions */
import express from 'express';
import registerUser from '../../controllers/userAuthController.js';

const router = express.Router();

// @desc Register a new user
// @route POST /api/v1/auth/register
// @access Public
router.post('/register', registerUser);

export default router;
