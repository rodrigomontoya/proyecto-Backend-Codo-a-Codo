const express= require('express');
const router= express.Router();
const authControllers= require('../controllers/authController');

router.get('/auth/login',authControllers.authLoginGet);
router.post('/auth/login',authControllers.authLoginPost);
router.get('/auth/register',authControllers.authRegisterGet);
router.post('/auth/register',authControllers.authRegisterPost);
router.get('/auth/logout',authControllers.authLogout);


module.exports= router;