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
      .withMessage("Tiene que tener 3 caracteres")
      .bail()
    .isAlpha()
    .withMessage("Solo puede tener letras"),
    body("precio")
     .not()
     .isEmpty()
     .withMessage("El precio es obligatorio"),
    
  ];


//rutas
router.get('/admin',adminControllers.admin);
router.get('/admin/create',adminControllers.adminCreateGet);
router.post('/admin',upload.single("imagen"),validations, adminControllers.adminCreatePost);
router.get('/admin/edit/:id',adminControllers.adminEditGet);
router.put('/admin/edit/:id',upload.single("imagen"),validations, adminControllers.adminEditPut);
router.delete('/admin/delete/:id',adminControllers.adminDelete);






module.exports= router;