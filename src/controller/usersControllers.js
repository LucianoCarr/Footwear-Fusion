/*const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator')
const {hashSync} = require('bcryptjs');

const controller = {
       registerPage : (req, res) => {
        return res.render('register');
       },

       /* registro */
/*       register : (req, res) => {
              const errors = validationResult(req)

              if (errors.isEmpty()) {
              const {name, lastname, email, password}  = req.body

              const newUser = {
                     id: users[users.length - 1].id + 1,
                     name : name.trim(),
                     lastname : lastname.trim(),
                     email : email.trim(),
                     role : 'user',
                     password : hashSync(password,10)
              }

              
              users.push(newUser) 
              
              fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 3), "utf-8");
              
              return res.redirect('login');
       } else {
              return res.render('register',{
                     errors : errors.mapped(),
                     old : req.body
              })
       } 
},

/* login */
/*login : (req, res) => {
       return res.render('login');
},

}
module.exports = controller*/

module.exports = {
       loginPage : require ('./users/loginPage'),
       login : require('./users/login'),
       registerPage : require('./users/registerPage'),
       register : require('./users/register'),
       profile : require('./users/profile')
}