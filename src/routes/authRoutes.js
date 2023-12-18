const express= require('express');
const router= express.Router();
const authControllers= require('../controllers/authController');
const model = require("./models/User");
const { body } = require("express-validator");

const registerValidations = [
    body("email")
      .isEmail()
      .withMessage("Ingrese una dirección de correo electrónico válida")
      .bail()
      .custom((value, { req }) => {
        return new Promise(async (resolve, reject) => {
          try {
            const user = await model.findOne({
              where: {
                email: value,
              },
            });
  
            if (user) {
              console.log(user);
              return reject();
            } else {
              return resolve();
            }
          } catch (error) {
            console.log(error);
          }
        });
      })
      .withMessage("Dirección de correo electrónico duplicada"),
    body("password")
      .isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage("La contraseña debe tener ...")
      .bail()
      .custom((value, { req }) => value === req.body.password_confirmation)
      .withMessage("Las contraseñas no coinciden"),
      body("edad")
      .isNumeric()
      .withMessage('El sku debe contener solo números'),
  ];
  
  const loginValidations = [
    body("email")
      .isEmail()
      .withMessage("Ingrese una dirección de correo electrónico válida"),
    body("password")
      .isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }
      )
      .withMessage("La contraseña debe tener ..."),
  ];

router.get('/auth/login',authControllers.authLoginGet);
router.post('/auth/login',authControllers.authLoginPost);
router.get('/auth/register',authControllers.authRegisterGet);
router.post('/auth/register',registerValidations,authControllers.authRegisterPost);
router.get('/auth/logout',authControllers.authLogout);


module.exports= router;