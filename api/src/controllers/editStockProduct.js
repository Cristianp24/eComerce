const { Product } = require("../db");


const editStockProduct = async (req, res) => {
  const productId = req.params.id; // Obtener el ID del producto a actualizar desde los parámetros de la solicitud
  const { stock } = req.body; // Obtener el nuevo stock desde el cuerpo de la solicitud
 
  try {
    console.log(req.body);
    // Actualizar el stock del producto en la base de datos
    await Product.update(
      
      { stock: stock },
      {
        where: {
          id: productId,
        },
        
      }
      
    );

    res.status(200).json({ message: "Stock actualizado exitosamente." });
  } catch (error) {
    console.error("Error al actualizar el stock:", error);
    res.status(500).json({ message: "Ocurrió un error al actualizar el stock." });
  }
};

module.exports = editStockProduct;
