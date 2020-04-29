const Products = require('../../mongo/models/products');

const createProduct = async (req, res) => {
  // Capture input from request body
  const { title, desc, price, images, userId } = req.body;

  try {
    const product = await Products.create({
      title,
      desc,
      price,
      images,
      user: userId,
    });
    res.status(200).send({ status: 'OK', data: product });
  } catch (e) {
    console.log('create product:', e);
    res
      .status(400)
      .send({ status: 'DUPLICATED_VALUES', message: error.keyValue });
  }
};
const deleteProduct = (req, res) => {};
const getProducts = (req, res) => {};

module.exports = {
  createProduct,
  deleteProduct,
  getProducts,
};
