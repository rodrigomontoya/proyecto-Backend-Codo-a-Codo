const express= require('express');
const router= express.Router();
const adminControllers= require('../controllers/adminController');


router.get('/admin',adminControllers.admin);
router.get('/admin/create',adminControllers.adminCreateGet);
router.post('/admin/create',adminControllers.adminCreatePost);
router.get('/admin/edit/:id',adminControllers.adminEditGet);
router.put('/admin/edit/:id',adminControllers.adminEditPut);
router.delete('/admin/delete/:id',adminControllers.adminDelete);

module.exports= router;