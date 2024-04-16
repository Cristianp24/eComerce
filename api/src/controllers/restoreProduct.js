const { Product } = require("../db");

async function restoreProduct(req, res) {
  try {
    const productId = req.params.id;

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "El producto no existe" });
    }

    // Actualizar la columna 'deleted' a 'false'
    product.deleted = false;
    await product.save();

    res.json({ message: "Moto restaurada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
}

module.exports = restoreProduct;


// enpoint POST http://localhost:3001/products/restore/1 for restore prod