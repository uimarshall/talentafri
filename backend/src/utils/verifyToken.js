/* eslint-disable import/extensions */
// Verify token
import jwt from 'jsonwebtoken';

// Verify the token and return the user id
const verifyToken = (token) =>
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // Verify the token using the secret key that was used to sign it.
    if (err) {
      return false;
    }
    return decoded;
  });

export default verifyToken;
