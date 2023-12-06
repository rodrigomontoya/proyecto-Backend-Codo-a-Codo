const shopControllers={
shop:(req,res) =>res.render("tienda/shop"),
shopItem:(req,res) =>res.send('Route for find and retrieve a product from an ID'),
shopItemAdd:(req,res) =>res.send('Route for add  the current item  to the shop cart'),
shopCartGet:(req,res) =>res.render('tienda/cart'),
shopCartPost:(req,res) =>res.send('Route for got to checkout page')
};

module.exports=shopControllers;
