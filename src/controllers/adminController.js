
  
/* const adminControllers={
admin:(req,res) =>res.render('admin/admin'),
adminCreateGet:(req,res) =>res.render('admin/create'),
adminCreatePost:(req,res) =>res.send('Producto Creado'),
adminEditGet:(req,res) =>res.send('Route for read Item Admin'),
adminEditPut:(req,res) =>res.send('Route for edit Item Admin'),
adminDelete:(req,res) =>res.send('Route for  delete Item Admin'),
}; */



/* module.exports = {
    adminControllers,
  };  */

  const admin = (req, res) => {
    res.render("admin/admin");
  };
  
  const adminCreateGet = (req, res) => {
    console.log(req.body);
    res.render('admin/create');
  };
  
  const adminCreatePost = (req, res) => {
    console.log(req.params, req.body);
    res.send("Producto modificado");
  };
  
  const adminEditGet = (req, res) => {
    console.log(req.params);
    res.send("Producto borrado");
  };
  const adminEditPost = (req, res) => {
    console.log(req.params);
    res.send("Producto borrado");
  };

  // este es el update del profe
  const adminEditPut = (req, res) => {
    console.log(req.params);
    res.send("Producto borrado");
  };
  const adminDelete = (req, res) => {
    console.log(req.params);
    res.send("Producto borrado");
  };
  
  module.exports = {
    admin,
    adminCreateGet,
    adminCreatePost,
    adminEditGet,
    adminEditPut,
    adminDelete,
  };