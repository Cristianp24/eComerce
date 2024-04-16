const { Product } = require('../db');

async function deleteProduct(req, res) {
  const productId = req.params.id; // Corregir la obtención del ID del producto desde los parámetros de la solicitud

  try {
    // Buscar el producto por su ID
    const product = await Product.findByPk(productId);

    if (!product) {
      // Si el producto no se encuentra, devolver un error 404
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Eliminar el producto de la base de datos
    await product.destroy();

    // Devolver un mensaje de éxito
    res.status(200).json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = deleteProduct;



// endpoint for delete product: DELETE http://localhost:3001/products/PRODUCTID