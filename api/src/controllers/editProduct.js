const { Product } = require("../db");

async function editProduct(req, res) {
 
  try {
    const productId = req.params.id;
    const { price, imageUrl } = req.body;

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    await product.update({ price, imageUrl });

    res.json({ message: "Producto actualizado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "No se pudo actualizar el producto" });
  }
}

module.exports = editProduct;


//http://localhost:3001/products/edit/2 endpoint and request for editproduct
// {
//     "price": 143250,
//     "imageUrl": ["https://m.media-amazon.com/images/I/71xLciLxT6L._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71xLciLxT6L._AC_SL1500_.jpg"]
    
//   }