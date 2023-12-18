
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const model = require("../models/User");

 const authLoginGet= (req,res) =>{res.render('auth/login')}

 const authLoginPost=(req,res) =>{res.send('Route for login in Admin')}

 const authRegisterGet=(req,res) =>

 {res.render('auth/register')

}


const authRegisterPost = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("auth/register", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const user = await model.create(req.body);

    // console.log(req.body, user);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};


 const authLogout=(req,res) =>{res.send('Route for Logout View')}




 module.exports = {
    authLoginGet,
    authLoginPost,
    authRegisterGet,
    authRegisterPost,
    authLogout,
  };

