// eslint-disable-next-line import/prefer-default-export
const getAllProducts = async (req, res, next) => {
  res.status(200).json({ success: true, message: 'Products successfully fetched' });
};

// eslint-disable-next-line import/prefer-default-export
export { getAllProducts };
