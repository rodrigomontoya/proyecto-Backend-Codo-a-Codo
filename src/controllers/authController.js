const authControllers={
authLoginGet:(req,res) =>res.render('admin/login'),
authLoginPost:(req,res) =>res.send('Route for login in Admin'),
authRegisterGet:(req,res) =>res.render('admin/register'),
authRegisterPost:(req,res) =>res.send('Route for Register in the page'),
authLogout:(req,res) =>res.send('Route for Logout View'),

};


module.exports=authControllers;