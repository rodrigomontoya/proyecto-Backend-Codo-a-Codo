const path = require("path");
//const sharp = require("sharp");
if (!process.env.VERCEL) {
    const sharp = require("sharp");
}

const { validationResult } = require("express-validator");
const model = require("../models/Producto");


const admin = async (req, res) => {
    try {
      const productos = await model.findAll();
      res.render("admin/admin", { productos });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const adminCreateGet = (req, res) => {
    res.render('admin/create');
  };
  
  const adminCreatePost =  async (req, res) => {
    console.log( req.body,req.file);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("admin/create", {
        values: req.body,
        errors: errors.array(),
      });
    }

    try {
        const producto = await model.create(req.body);
        console.log(producto);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
        
    }
    // sharp se usa para renderizar la imagen y que mejore el funcionamiento de la pagina
     //necesario el if para saber si estoy subiendo una imagen
    if(req.file){
        sharp(req.file.buffer)
        .resize(300)
        .toFile(path.resolve(__dirname,"../../public/uploads/producto1.jpg"))
        .catch((err) =>console.log(err));
    }

        res.send('Producto Creado');  
    
  };
  
  const adminEditGet = (req, res) => {
    console.log(req.params);
    res.render('admin/edit');
  };

  // este es el update del profe
  const adminEditPut = (req, res) => {
    console.log(req.params,req.body);
    res.send('Producto modificado');
  };

  const adminDelete = (req, res) => {
    console.log(req.params);
    res.send("Producto borrado");
  };
  
  module.exports = {
    admin,
    adminCreateGet,
    adminCreatePost,
    adminEditGet,
    adminEditPut,
    adminDelete,
  };