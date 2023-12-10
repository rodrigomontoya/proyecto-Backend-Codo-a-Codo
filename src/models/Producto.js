const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Producto = sequelize.define("Producto", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

// modifica la base de datos en always
(async () => {
  await sequelize.sync();
})();

module.exports = Producto;