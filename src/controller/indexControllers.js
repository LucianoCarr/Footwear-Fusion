const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
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
		return res.render('index', {
			products,
			keywords : req.query.keywords
		})
	}
};

module.exports = controller;