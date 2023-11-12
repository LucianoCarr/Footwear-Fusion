const $ = id => document.getElementById(id)


window.onload = function(){
    const db = require('../../src/database/models')
    $('hombre').addEventListener('click',async function(e){

        try {
            
            const categoryMan = await db.Product.findAll({
                where : {
                    categoryId : 1
                }
            })

            return categoryMan 
        } catch (error) {
           console.log(error+'--------------------');
        }

    })

}