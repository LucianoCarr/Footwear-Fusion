module.exports = (req,res) => {
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator')
const {hashSync} = require('bcryptjs');

   
        const errors = validationResult(req)

        if (errors.isEmpty()) {
        const {username, lastname, email, password}  = req.body

        const newUser = {
               id: users[users.length - 1].id + 1,
               username : username.trim(),
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

}