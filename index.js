const express = require('express');
require("dotenv").config();
const app = express();
const methodOverride = require("method-override");
const mainRoutes= require('./src/routes/mainRoutes');
const shopRoutes= require('./src/routes/shopRoutes');
const adminRoutes= require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const path = require('path');
const session = require("cookie-session");
const multer = require('multer');
const sequelize = require("./src/models/connection");

const session = require("cookie-session");

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
// Configuración de Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(
  session({
    keys: ["S3cr3t01", "S3cr3t02"],
  })
);


app.use(express.static(path.join(__dirname, "/public")));

app.use('/',mainRoutes);
app.use('/',shopRoutes);
app.use('/',adminRoutes);
app.use('/',authRoutes);
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

// esto se usa cuando esta mal la ruta de la pagina a la cual se quiere acceder
app.use((req, res, next) => {
    res.status(404).send("La pagina no existe");
  });



app.listen(4000,async ()=>{

  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }

  console.log("Servidor corriendo en http://localhost:4000")
});

