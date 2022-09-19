let { query } = require('express-validator')
module.exports = {
	required(path){
		return query(path)
			.exists({
				checkNull: true
			})
			.withMessage(`${path} is required`)
	},
	isNumber(path) {
		return query(path)
			.exists()
			.withMessage(
				`${path.split('.')[1] ? path.split('.')[1] : path} is required`
			)
			.isNumeric()
			.withMessage(
				`${
					path.split('.')[1] ? path.split('.')[1] : path
				} is incorrect type`
			)
	}

}