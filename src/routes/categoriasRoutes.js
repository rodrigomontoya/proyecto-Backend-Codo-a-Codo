const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const validations = [
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Tiene que tener 3 caracteres"),
];

const controller = require("../controllers/categoriasController");

// CRUD = Create, Read, Update, Delete

// Configuración de rutas
router.get("/categorias", controller.index);
router.get("/categorias/create", controller.create);
router.post("/categorias", validations, controller.store);
router.get("/categorias/:id/edit", controller.edit);
router.put("/categorias/:id", validations, controller.update);
router.delete("/categorias/:id", controller.destroy);

module.exports = router;