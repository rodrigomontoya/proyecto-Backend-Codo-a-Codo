const authControllers={
authLoginGet:(req,res) =>res.send('Route for login View'),
authLoginPost:(req,res) =>res.send('Route for login in Admin'),
authRegisterGet:(req,res) =>res.send('Route for Register View'),
authRegisterPost:(req,res) =>res.send('Route for Register in the page'),
authLogout:(req,res) =>res.send('Route for Logout View'),

};


module.exports=authControllers;