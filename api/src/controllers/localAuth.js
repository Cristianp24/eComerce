const { User } = require('../db');

async function localAuth(req, res) {
  const { email, password } = req.body;
try {
    if(!email || !password) return res.status(400).json({message:"Faltan datos"});
    const user = await User.findOne({where: {email}});
    if(!user) return res.status(404).json({message:"Usuario no encontrado"});
    return user.password === password 
    ?  res.status(200).json({access:true})
    : res.status(403).json({ message:"Contraseña incorrecta"})

} catch (error) {
    res.status(500).json({message:error})
}
}

module.exports = localAuth;
