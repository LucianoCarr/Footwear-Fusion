const db = require('../../database/models');
//const updateUser = require('../../services/userServices/update.Services')

const fetch = require('node-fetch')
const API = 'https://apis.datos.gob.ar/georef/api/provincias?'

const { validationResult } = require('express-validator')

module.exports = async (req,res) =>{
    try {

        const errors = validationResult(req)
     
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

            if (fetch(`${API}&nombre=${province}`)) {
                return data.json()
            }
                
                
                req.session.userLogin.name = name;
                res.locals.userLogin.name = name;
            
                if(req.cookies.footwear){
                    res.cookie("footwear",req.session.userLogin)
                }
                return res.redirect('/')

        }
    } catch (error) {
        console.log(error);
    }
}