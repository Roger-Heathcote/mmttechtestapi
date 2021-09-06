async function getListOfProducts(req, res, next) {

	const here = `${req.protocol}://${req.get('host')}`;

	res.status(200).send({
		msg: "OK",
		code: 200,
		products: {
			"mountain-dew": {
			name: "Mountain Dew",
			image: `${here}/images/mountain-dew.png`,
			price: 180,
			},
			"desperados": {
			name: "Desperados",
			image: `${here}/images/desperados.jpeg`,
			price: 259,
			},
			"jack-daniels": {
			name: "Jack Daniels",
			image: `${here}/images/jack-daniels.jpg`,
			price: 335,
			}
		},
	})	
}
module.exports = getListOfProducts
