const { Product } = require("../db");

//Eliminar product por id

async function disableProduct(req, res) {
    try {
      const productId = req.params.id;
  
      const product = await Product.findByPk(productId);
  
      if (!product) {
        throw res.status(404).json({ error: "La product no existe" });
      }
  
      // Realiza el borrado lógico
      product.deleted = true;
      product.deletedAt = new Date(); // Opcional: registra la fecha y hora de eliminación
  
      await product.save();
  
      res.json({ message: "product marcada como eliminada correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error" });
    }
  }
  

module.exports = disableProduct;


// http://localhost:3001/products/disable/1 endpoint 
