
const adminControllers={
admin:(req,res) =>res.send('Route for admin View'),
adminCreateGet:(req,res) =>res.send('Route for Create Admin View'),
adminCreatePost:(req,res) =>res.send('Route for Create Item Admin '),
adminEditGet:(req,res) =>res.send('Route for read Item Admin'),
adminEditPut:(req,res) =>res.send('Route for edit Item Admin'),
adminDelete:(req,res) =>res.send('Route for  delete Item Admin'),

};



module.exports=adminControllers;