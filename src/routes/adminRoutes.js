const express= require('express');
const router= express.Router();
const adminControllers= require('../controllers/adminController');
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { body } = require("express-validator");



//rutas
router.get('/admin',adminControllers.admin);
router.get('/admin/create',adminControllers.adminCreateGet);
router.post('/admin',upload.single("imagen"), adminControllers.adminCreatePost);
router.get('/admin/edit/:id',adminControllers.adminEditGet);
router.put('/admin/edit/:id',upload.single("imagen"), adminControllers.adminEditPut);
router.delete('/admin/delete/:id',adminControllers.adminDelete);



//CRUD



module.exports= router;