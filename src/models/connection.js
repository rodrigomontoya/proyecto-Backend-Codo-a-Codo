const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
"rodrigomontoya_proyectocodoacodo",
"339567_rodrigo" ,
  "pro4484894",
  {
    host: "mysql-rodrigomontoya.alwaysdata.net",
    dialectModule: require("mysql2"),
    dialect: "mysql",
  }
);

module.exports = sequelize;

//rodrigomontoya_proyectocodoacodo  nombre de base datos
//339567_rodrigo  usario 
// pro4484894  contraseña 
// mysql-rodrigomontoya.alwaysdata.net   host de base datos always 