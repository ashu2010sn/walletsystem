const mongoose = require('mongoose')

const Wallet = new mongoose.Schema(
	{
		walletId: String,
        balance: {
            type: Number,
            default: 0
        },
        name: String
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Wallet', Wallet)
