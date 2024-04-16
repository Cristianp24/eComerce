require("dotenv").config();
const { Sequelize } = require("sequelize");
const models = require("./models");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;



const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/tiendaonline`,
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );



  Object.values(models).forEach((model) => {
    model(sequelize);
  });
  
  // Función para capitalizar la primera letra y la letra después de un guion bajo
  function capitalize(str) {
    return str.replace(/(?:^|_)([a-z])/g, (_, char) => char.toUpperCase());
  }
  
  // Capitalizar los nombres de los modelos
  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map(([modelName, model]) => [
    capitalize(modelName),
    model,
  ]);
  
  sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Brand, Category, Product , Review , Address, User, Cart, Order, OrderItem, CartItem  } = sequelize.models

User.hasMany(Address); 
Address.belongsTo(User); 

User.hasOne(Cart); 
Cart.belongsTo(User); 

User.hasMany(Order); 
Order.belongsTo(User); 

Brand.hasMany(Product); 
Product.belongsTo(Brand, { foreignKey: 'brandId' }); 

Category.hasMany(Product); 
Product.belongsTo(Category); 

Product.hasMany(Review); 
Review.belongsTo(Product); 

Cart.hasMany(CartItem); 
CartItem.belongsTo(Cart); 

Product.hasMany(CartItem); 
CartItem.belongsTo(Product); 

Order.hasMany(OrderItem); 
OrderItem.belongsTo(Order); 

Product.hasMany(OrderItem); 
OrderItem.belongsTo(Product); 

Review.belongsTo(User)
User.hasMany(Review)


module.exports = {
...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./models');
   conn: sequelize,
};
