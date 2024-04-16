const { Product} = require("../db");

const getProductByID = async (req, res) => {
  let { id } = req.params;
  try {
    const prodId = await Product.findByPk(id);

    res.status(200).json(prodId);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getProductByID;