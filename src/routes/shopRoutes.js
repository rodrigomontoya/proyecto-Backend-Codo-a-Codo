const express= require('express');
const router= express.Router();
const shopControllers= require('../controllers/shopController');

router.get('/shop',shopControllers.shop);
router.get('/shop/item/:id',shopControllers.shopItem);
router.post('/shop/item/:id/add',shopControllers.shopItemAdd);
router.get('/shop/cart',shopControllers.shopCartGet);
router.post('/shop/cart',shopControllers.shopCartPost);

module.exports= router;