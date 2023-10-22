const db = require('../database/models')


const controller = {
	index: (req, res) => {
		
		db.Product.findAll()
		.then((products) =>{
			
		return res.render('index', {
				products
				
			})
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