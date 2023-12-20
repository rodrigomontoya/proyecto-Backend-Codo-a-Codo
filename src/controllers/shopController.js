
const modelProduct = require("../models/Product");
const modelCategory = require('../models/Category');

const shop = async (req,res) =>{

    try {
        const productos = await modelProduct.findAll({
          include: "Category",
        });
        res.render("tienda/shop", { productos });
      } catch (error) {
        res.status(500).send(error);

}
}

// este es el que tengo que modificar para mostrar todo
const shopItem = async (req, res) => {
  try {
    const productId = req.params.id;

    // Obtener detalles del producto por su ID
    const producto = await modelProduct.findOne({
      where: {
        id: productId
      },
      include: modelCategory // Asumiendo que la relación está definida en tu modelo de Product
    });

    // Verificar si el producto existe
    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }

    // Renderizar la vista con la información del producto y su categoría
    res.render('tienda/item', { producto, categoria: producto.Category });
  } catch (error) {
    console.error('Error en la función showItem:', error);
    res.status(500).send('Error interno del servidor');
  }
};




const shopItemAdd = (req,res) =>{
    res.send('Route for add  the current item  to the shop cart')
}
const shopCartGet =(req,res) =>{res.render(
    'tienda/cart'
    )}
 const shopCartPost= (req,res) => {
    res.send('Route for got to checkout page')
}



module.exports = {
    shop,
    shopItem,
    shopItemAdd,
    shopCartGet,
    shopCartPost,
    
  };