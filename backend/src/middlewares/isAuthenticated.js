import ErrorHandler from '../utils/errorHandler';
import getTokenFromHeaders from '../utils/getTokenFromHeaders';
import verifyToken from '../utils/verifyToken';

const isAuthenticated = (req, res, next) => {
  // Get token from the request headers
  const token = getTokenFromHeaders(req);
  // Verify the token and get the user id from it.
  // If the token is invalid, it will throw an error and the request will be terminated.
  // If the token is valid, we will get the user id from it and attach it to the request object.
  // This way, we will have access to the user profile in all the protected routes.
  const decodedUser = verifyToken(token);
  req.user = decodedUser;

  if (!decodedUser) {
    return ErrorHandler('Invalid or Expired Token. Please Login first to access this resource', 401);
  }

  // Proceed to the next middleware
  return next();
};

export default isAuthenticated;
// This middleware checks if the user is authenticated by checking if the token exists in the request headers.
