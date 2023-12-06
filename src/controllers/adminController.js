
const adminControllers={
admin:(req,res) =>res.render('admin/admin'),
adminCreateGet:(req,res) =>res.render('admin/create'),
adminCreatePost:(req,res) =>res.send('Producto Creado '),
adminEditGet:(req,res) =>res.send('Route for read Item Admin'),
adminEditPut:(req,res) =>res.send('Route for edit Item Admin'),
adminDelete:(req,res) =>res.send('Route for  delete Item Admin'),

};



module.exports=adminControllers;