module.exports = {
    cart : (req, res) => {
       return res.render('cart');
      },
      details : (req, res) => {
        return res.render('details');
       },
       login : (req, res) => {
        return res.render('login');
       },
       register : (req, res) => {
        return res.render('register');
       },
}