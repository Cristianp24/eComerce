const { User } = require('../db');

async function postUser(req, res) {
  const { name, email, password, address } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const newUser = await User.create({
      name,
      email,
      password,
      address,
      created_at: new Date(), // Puedes utilizar el valor actual de la fecha y hora
    });

    res.status(201).json({ message: 'Usuario registrado correctamente', user: newUser });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = postUser;

//endpoing POST http://localhost:3001/login
// {
//   "name": "Cristian",
//   "email": "cristian-.p@hotmail.com",
//   "password": "olvidatela",
//   "address": "12 de octubre 708"
// }