const { User } = require('../db');
const jwt = require('jsonwebtoken');

async function localAuth(req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) return res.status(400).json({ message: "Faltan datos" });
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    if (user.password !== password) return res.status(403).json({ message: "Contraseña incorrecta" });

    // Generar token JWT
    const token = jwt.sign({ 
      userId: user.id 
    },
      'LLAVESECRETA',{
          expiresIn:"1h"
    }
  );

    // Enviar token en la respuesta
    res.status(200).json({ access: true, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = localAuth;

