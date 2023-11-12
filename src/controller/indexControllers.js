const db = require('../database/models')
const {Op} = require('sequelize')

const paginate = require('express-paginate')
//const {productList} = require('../services/indexServices')

const controller = {
	index: async (req, res) => {  
		try {
			const products = await db.Product.findAll({limit: req.query.limit, offset: req.skip})

			const total = products.count;
	        const pagesCount = Math.ceil(total / req.query.limit)
            const currentPage = req.query.page
            const pages = paginate.getArrayPages(req)(pagesCount,pagesCount,currentPage)
			

		const categoryMan = await db.Product.findAll({
			where : {
				categoryId : 1
			}
		})
		const categoryWoman = await db.Product.findAll({
			where : {
				categoryId : 2
			}
		})
		const categoryChild = await db.Product.findAll({
			where : {
				categoryId : 3
			}
		})
			
		return res.render('index', {
			products,
				categoryMan,
				categoryWoman,
				categoryChild,
				total,
				pagesCount,
				currentPage,
				pages,
			})
		} catch (error) {
			console.log(error);
		}
	},


	search: async (req, res) => {
		try {
			const  results = await db.Product.findAll({
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
				return res.render('results', {
					results,
					keywords : req.query.keywords
				})
		} catch (error) {
			console.log(error);
		}
	},
}

module.exports = controller;