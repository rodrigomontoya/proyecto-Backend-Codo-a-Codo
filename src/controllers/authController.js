
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const model = require("../models/User");

 const authLoginGet= (req,res) =>{

  res.render('auth/login')
}

const authLoginPost = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("auth/login", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const user = await model.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.render("auth/login", {
        values: req.body,
        errors: [{ msg: "El correo y/o contraseña son incorrectos (email)" }],
      });
    } else if (!(await bcryptjs.compare(req.body.password, user.password))) {
      res.render("auth/login", {
        values: req.body,
        errors: [
          { msg: "El correo y/o contraseña son incorrectos (password)" },
        ],
      });
    } else {
      // Inicio de sesión exitoso. Redirigiendo a /admin
      req.session.userId = user.id;
      res.redirect("/");
      console.log("Inicio de sesión exitoso. Redirigiendo a /");
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};


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


 const authLogout=(req,res) =>{
  req.session = null;
  res.redirect("/");

}




 module.exports = {
    authLoginGet,
    authLoginPost,
    authRegisterGet,
    authRegisterPost,
    authLogout,
  };

