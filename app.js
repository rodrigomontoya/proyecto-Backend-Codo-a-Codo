const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/home',(req,res)=> res.sendFile(__dirname+'/public/index.html'));

app.listen(4000,()=>console.log("Servidor corriendo en http://localhost:4000"));