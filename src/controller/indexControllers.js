const db = require('../database/models')
const {Op} = require('sequelize')

//const {productList} = require('../services/indexServices')
//const paginate = require('express-paginate')

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
		const products = db.Product.findAll()

		const categoryMan = db.Product.findAll({
			where : {
				categoryId : 1
			}
		})
		const categoryWoman = db.Product.findAll({
			where : {
				categoryId : 2
			}
		})
		const categoryChild = db.Product.findAll({
			where : {
				categoryId : 3
			}
		})
		Promise.all([products, categoryMan, categoryWoman, categoryChild])
		.then(([products, categoryMan, categoryWoman, categoryChild]) => {
			
		return res.render('index', {
			products,
				categoryMan,
				categoryWoman,
				categoryChild
			})
		})
		 
	},

	search: (req, res) => {
		db.Product.findAll({
			where : {
				[Op.or] : [
					{
						name : {
							[Op.substring] : req.query.keywords
						}
					},
					{
						description : {
							[Op.substring] : req.query.keywords
						}
					}
				]
			}
		})
		.then(results => {
			return res.render('results', {
				results,
				keywords : req.query.keywords
			})
		})
	}
};

module.exports = controller;