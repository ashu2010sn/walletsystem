const mongoose = require('mongoose')

const Transaction = new mongoose.Schema(
	{
		transactionId: String,
		walletId: String,
		amount: Number,
		description: String,
		balance: Number,
		type: {
			type: String,
			enum: ['DEBIT', 'CREDIT']
		}
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Transaction', Transaction)
