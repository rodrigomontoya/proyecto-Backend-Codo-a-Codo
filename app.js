const express = require('express');
const app = express();

app.get('/ping',(req,res)=> res.send('pong'));

app.listen(4000,()=>console.log("Servidor corriendo en http://localhost:4000"));