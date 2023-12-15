const db = require('../../database/models');
//const updateUser = require('../../services/userServices/update.Services')

const moment = require("moment");
const fetch = require('node-fetch');

const API = 'https://apis.datos.gob.ar/georef/api/provincias?';

const { validationResult } = require('express-validator')

module.exports = async (req,res) =>{
    try {

        const errors = validationResult(req)

        const id = await req.session.userLogin.id;
        const user = await db.User.findByPk(id);
    
        
        const response = await fetch(API);
        const data = await response.json();
        const provinces = data.provincias.sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0 )
    
        if(errors.isEmpty()){
            let {name,lastName,birthday, adress, province} = req.body
            
            const userId = await db.User.findByPk(req.session.userLogin.id)
                
            const userUpdate = await db.User.update(
                {   name : name.trim(),
                    lastName : lastName.trim(),
                    birthday,
                    adress,
                    province
                },
                {
                    where : {
                        id : req.session.userLogin.id
                    }
                }
            )

            if (province) {
                const response = await fetch(`${API}&nombre=${province}`);
                if (response.ok) {
                  const data = await response.json();
                  
                }
              }
                
                
                req.session.userLogin.name = name;
                res.locals.userLogin.name = name;
            
                if(req.cookies.footwear){
                    res.cookie("footwear",req.session.userLogin)
                }
                return res.redirect('/')

        } else {
            return res.render("profile", { 
                errors: errors.mapped(),
                 old: req.body,
                 ...user.dataValues,
                 moment,
                provinces,
             });
        }
    } catch (error) {
        console.log(error);
    }
}