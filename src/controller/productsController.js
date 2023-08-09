module.exports = {
    cart : (req, res) => {
       return res.render('cart');
      },
      details : (req, res) => {
        return res.render('details');
       },
       add : (req, res) => {
        return res.render('producAdd');
       },
       edit : (req, res) => {
        return res.render('productEdit');
       },
}