const express= require('express');
const router= express.Router();
const adminControllers= require('../controllers/adminController');
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { body } = require("express-validator");

// validaciones
const validations = [
    body("nombre")
      .not()
      .isEmpty()
      .withMessage("El nombre es obligatorio")
      .bail()
      .isLength({ min: 3 })
      .withMessage("Tiene que tener 3 caracteres"),
    body("precio")
     .not()
     .isEmpty()
     .withMessage("El precio es obligatorio"),
     body("stock")
     .not()
     .isEmpty()
     .withMessage("El stock es obligatorio"),
     body("sku")
     .not()
     .isEmpty()
     .withMessage("El sku es obligatorio")
     .bail()
     .isNumeric()
     .withMessage('El sku debe contener solo números'),
     body("CategoryId")
     .not()
     .isEmpty()
     .withMessage("El categoría es obligatorio"),
   
  ];


 


//rutas
router.get('/admin',adminControllers.admin);
router.get('/admin/create',adminControllers.adminCreateGet);
router.post('/admin',upload.single("imagen"),validations, adminControllers.adminCreatePost);
router.get('/admin/:id/edit',adminControllers.adminEditGet);
router.put('/admin/:id',upload.single("imagen"),validations, adminControllers.adminEditPut);
router.delete('/admin/:id',adminControllers.adminDelete);






module.exports= router;