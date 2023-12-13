const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

/*  const Producto = sequelize.define("Producto", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});  */

const Producto = sequelize.define("Producto", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sku: {
      type: DataTypes.STRING, // O el tipo de datos que sea adecuado para SKU
      allowNull: true,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER, // O el tipo de datos que sea adecuado para el stock
      allowNull: true,
    },
    descuentos: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  

 

  

// modifica la base de datos en always
/* (async () => {
  await sequelize.sync();
})(); */

// Después de definir todos los modelos
sequelize.sync({ force: true }) // Cambia a `true` si quieres forzar la sincronización (esto eliminará y recreará las tablas)
  .then(() => {
    console.log('Base de datos sincronizada correctamente');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
module.exports = Producto;