const { unlink } = require("fs/promises");
const { existsSync } = require("fs");
const path = require("path");
const sharp = require("sharp");
const { validationResult } = require("express-validator");
const model = require("../models/Product");
const modelCategory = require("../models/Category");


const admin = async (req, res) => {
    try {
      const productos = await model.findAll({
        include: "Category",
      });
      res.render("admin/productos/admin", { productos });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const adminCreateGet =async (req, res) => {

    try {
      const categorias = await modelCategory.findAll();
      res.render("admin/productos/create", { categorias });
    } catch (error) {
      res.status(500).send(error);
    }
    
  };
  
  const adminCreatePost =  async (req, res) => {
    console.log( req.body,req.file);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      try {
        const categorias = await modelCategory.findAll();
  
        return res.render("admin/productos/create", {
          categorias,
          values: req.body,
          errors: errors.array(),
        });
      } catch (error) {
        res.status(500).send(error);
      }
    }

    try {
        const producto = await model.create(req.body);
        console.log(producto);

        if (req.file) {
            sharp(req.file.buffer)
              .resize(300)
              .flatten({ background: '#fff' })
              .toFile(
                path.resolve(
                  __dirname,
                  `../../public/uploads/productos/producto_${producto.id}.jpg`
                )
              )
              .then((info) => {
                // La imagen se ha procesado correctamente
                console.log('Imagen procesada con éxito', info);
              })
              .catch((err) => {
                // Error al procesar la imagen
                console.error('Error al procesar la imagen', err);
                // Aquí podrías enviar una respuesta al cliente indicando el error
              });
          }
          
        res.redirect("/admin");
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
        
    }
    // sharp se usa para renderizar la imagen y que mejore el funcionamiento de la pagina
     //necesario el if para saber si estoy subiendo una imagen
   

    
    
  };
  
  const adminEditGet = async (req, res) => {
    try {
      const producto = await model.findByPk(req.params.id);
      const categorias = await modelCategory.findAll();  // Agregamos esta línea para obtener las categorías
      console.log(producto);
  
      if (producto) {
        res.render("admin/productos/edit", { values: producto, categorias });
      } else {
        res.status(404).send("No existe el producto");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };
  
  

  // este es el update del profe
  const adminEditPut = async (req, res) => {
    console.log(req.params,req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      try {
        const categorias = await modelCategory.findAll();
  
        return res.render("admin/productos/edit", {
          categorias,
          values: req.body,
          errors: errors.array(),
        });
      } catch (error) {
        res.status(500).send(error);
      }
    }
    try {
      const affected = await model.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (affected[0] == 1) {
        if (req.file) {
          sharp(req.file.buffer)
          .flatten({ background: '#fff' })
            .resize(300)
            .toFile(
              path.resolve(
                __dirname,
                `../../public/uploads/productos/producto_${req.params.id}.jpg`
              )
            )
            .catch((err) => console.log(err));
        }
  
        res.redirect("/admin");
      } else {
        res.status(400).send("No se actualizo el producto");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };

 
  
 
  const adminDelete = async  (req, res) => {
    try {
      const destroyed = await model.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (destroyed == 1) {
        if (
          existsSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/productos/producto_${req.params.id}.jpg`
            )
          )
        ) {
          await unlink(
            path.resolve(
              __dirname,
              `../../../public/uploads/productos/producto_${req.params.id}.jpg`
            )
          );
        }
      }
  
      res.redirect("/admin");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };
  
  module.exports = {
    admin,
    adminCreateGet,
    adminCreatePost,
    adminEditGet,
    adminEditPut,
    adminDelete,
  };