const Responder = require('@services/Responder')
const Logger = require('@services/Logger')
const Wallet = require('@model/wallet')
const Transaction = require('@model/transaction')
const {getRandomId} = require('@services/Common')
class WalletController {
	async initWallet(req, res) {
		try {
            let wallet = new Wallet()
            wallet.walletId = getRandomId()
            wallet.balance = req.body.balance
            wallet.name = req.body.name
            // can check once for id then save it
            await wallet.save()
			return Responder.respondWithSuccess(
				req,
				res,
				{
                    id: wallet.walletId,
                    balance: wallet.balance,
                    name: wallet.name,
                    date: wallet.createdAt
                },
				'Wallet created successfully'
			)
		} catch (error) {
			Logger.error(error)
			return Responder.respondWithError(req, res, error)
		}
	}

    async transaction(req, res){
        try {
            let wallet = await Wallet.findOne({walletId: req.params.walletId})
            if(!wallet)
                return Responder.respondWithNotFound(req, res, 'Incorrect wallet id')
            
            wallet.balance = wallet.balance + req.body.amount
            await wallet.save()

            let transaction = new Transaction()
            transaction.transactionId = getRandomId()
            transaction.walletId = wallet.walletId
            transaction.amount = req.body.amount
            transaction.description = req.body.description
            transaction.balance = wallet.balance
            transaction.type = req.body.amount > 0? 'CREDIT': 'DEBIT'
            await transaction.save()
            
            return Responder.respondWithSuccess(
				req,
				res,
				{
                    balance: wallet.balance,
                    transactionId: transaction.transactionId
                },
				'Wallet created successfully'
			)
        } catch (error) {
            Logger.error(error)
			return Responder.respondWithError(req, res, error)
        }
    }

    async transactions(req, res){
        try {
            let wallet = await Wallet.findOne({walletId: req.query.walletId})
            if(!wallet)
                return Responder.respondWithNotFound(req, res, 'Incorrect wallet id')
            
            let transactions = await Transaction.find({walletId: req.query.walletId}).skip(req.query.skip).limit(req.query.limit)

            return Responder.respondWithSuccess(
				req,
				res,
				transactions,
				'Wallet created successfully'
			)
        } catch (error) {
            Logger.error(error)
			return Responder.respondWithError(req, res, error)
        }
    }

    async getWallet(req, res){
        try {
            let wallet = await Wallet.findOne({walletId: req.params.id})
            if(!wallet)
                return Responder.respondWithNotFound(req, res, 'Incorrect wallet id')

            
            return Responder.respondWithSuccess(
				req,
				res,
				wallet,
				'Wallet created successfully'
			)
        } catch (error) {
            Logger.error(error)
			return Responder.respondWithError(req, res, error)
        }
    }
}

module.exports = new WalletController()
