const express= require('express');
const router= express.Router();
const adminControllers= require('../controllers/adminController');


router.get('/admin',adminControllers.admin);
module.exports= router;