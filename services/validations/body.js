let { body } = require('express-validator')
module.exports = {
    isDecimal(path) {
		return body(path)
			.exists()
			.withMessage(`${path} is required`)
			.isDecimal()
			.withMessage(
				`${
					path.split('.')[1] ? path.split('.')[1] : path
				} should be in correct format`
			)
	},
	isFloat(path) {
		return body(path)
			.exists()
			.withMessage(
				`${path.split('.')[1] ? path.split('.')[1] : path} is required`
			)
			.isFloat()
			.withMessage(
				`${
					path.split('.')[1] ? path.split('.')[1] : path
				} should be in correct format`
			)
	},
	hasPrecisionUpto(path, length){
		return body(path)
			.custom(value => {
				if((value + "").split(".")[1]?.length>length)
					throw new Error(`Only ${length} precision after decimal accepted in ${path}`)
				else return true
			})
	},
	isString(path) {
		return body(path)
			.exists()
			.withMessage(
				`${path.split('.')[1] ? path.split('.')[1] : path} is required`
			)
			.isString()
			.withMessage(
				`${
					path.split('.')[1] ? path.split('.')[1] : path
				} is incorrect type`
			)
	},
	isNumber(path) {
		return body(path)
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
	},
	isStringAndLength(path, min, max = 0) {
		let v = body(path)
			.exists()
			.withMessage(`${path} is required`)
			.isString()
			.withMessage(`${path} is required`)
			.isLength({
				min
			})
			.withMessage(
				`${
					path.split('.')[1] ? path.split('.')[1] : path
				} must be at least ${min} characters`
			)
		if (max) {
			v.isLength({ max }).withMessage(
				`${
					path.split('.')[1] ? path.split('.')[1] : path
				} can not exceed ${max} characters`
			)
		}
		return v
	},
	requiredObjectId(path, optional = false) {
		return body(path)
			.custom(value => {
				if (optional && value === undefined) {
					return true
				}
				return ObjectId.isValid(value)
			})
			.withMessage(`Please provide a valid ${path}`)
	},
	required(path) {
		return body(path)
			.exists({
				checkNull: true
			})
			.withMessage(`${path} is required`)
	},
	requiredArray(path) {
		return body(path)
			.exists({
				checkNull: true
			})
			.withMessage(`${path} is required`)
			.isArray()
			.withMessage(`${path} must be an array`)
	}
}