const mainControllers={
    home:(req,res) =>res.render('tienda/index'),
    contact:(req,res) =>res.render('tienda/contact'),
    about:(req,res) =>res.send('Route for About View'),
    faqs:(req,res) =>res.send('Route for Faqs View')
};

module.exports=mainControllers;