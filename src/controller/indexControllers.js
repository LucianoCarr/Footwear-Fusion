const db = require('../database/models')

//const {productList} = require('../services/indexServices')
//const paginate = require('express-paginate')

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {

	/* productList : async (req,res) => {
		try {
		  const {total, products} = await productList(req.query.limit,req.skip)
	 const pagesCount = Math.ceil(total / req.query.limit)
            const currentPage = req.query.page
            const pages = paginate.getArrayPages(req)(pagesCount,pagesCount,currentPage)
		  return res.status(200).json({
			ok : true,
			data : products.map(product => {
                    return {
                        ...product.dataValues,
                        image : `${req.protocol}://${req.get('host')}/img/${product.image}`,
                        url : `${req.protocol}://${req.get('host')}/products/details/${product.id}`
                    }
                }),

                meta : {
                    total,
                    pagesCount,
                    currentPage,
                    pages
                }
		  })
		  
		} catch (error) {
		  return res.status(error.status || 500).json({
			ok : false,
			status : error.status || 500,
			error : error.message || 'Hubo un ERROR'
		})
		}
	  }, */

	index: (req, res) => {
		
		const productsFilePath = path.join(__dirname, '../data/productsData.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const product = products.find(product => product.id === +req.params.id)
		const productHombre = products.filter(product => product.category == "hombre")
		const productMujer = products.filter(product => product.category == "mujer")
		const productNene = products.filter(product => product.category == "nene")
		return res.render('index', {
			products,
			product,
			productHombre,
			productMujer,
			productNene
			
		})
		 
	},

	search: (req, res) => {
		const results = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()))
		return res.render('results', {
			results,
			keywords : req.query.keywords
		})
	}
};

module.exports = controller;