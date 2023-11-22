const express= require('express');
const router= express.Router();

router.get('/shop',(req,res) =>res.send('Route for Shop View'));

module.exports= router;