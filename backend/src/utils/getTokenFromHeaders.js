// Method 2

// Get the token from the request Headers.
// This is used in the frontend to get the token from the request headers and send it to the backend.

const getTokenFromHeaders = (req) => {
  const token =
    req.headers.authorization && req.headers.authorization.startsWith('Bearer')
      ? req.headers.authorization.split(' ')[1]
      : null;
  if (token) {
    return token;
  }
  return false;
};

export default getTokenFromHeaders;
