let { param } = require('express-validator')
module.exports = {
	required(path){
		return param(path)
			.exists({
				checkNull: true
			})
			.withMessage(`${path} is required`)
	},

}