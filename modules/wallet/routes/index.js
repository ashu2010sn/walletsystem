const express = require('express');
const validationRules = require('@services/validations')
const Responder = require('@services/Responder')
const WalletController = require('@wallet/controllers/WalletController');
const { oneOf } = require('express-validator');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.post(
  '/setup', 
  [validationRules.body.required("name"), validationRules.body.isStringAndLength("name", 3), validationRules.body.required("balance"), validationRules.body.hasPrecisionUpto("balance", 4), oneOf([validationRules.body.isNumber("balance"), validationRules.body.isDecimal("balance")])],
  Responder.validate.bind(Responder),
  WalletController.initWallet.bind(WalletController)
)

router.post(
    '/transact/:walletId', 
    [validationRules.params.required("walletId"), validationRules.body.required("amount"), validationRules.body.hasPrecisionUpto("amount", 4), validationRules.body.required("description")],
    Responder.validate.bind(Responder),
    WalletController.transaction.bind(WalletController)
  )


router.get(
    '/transactions', 
    [validationRules.query.required("walletId"), validationRules.query.required("skip"), validationRules.query.isNumber("skip"),  validationRules.query.required("limit"), validationRules.query.isNumber("limit")],
    Responder.validate.bind(Responder),
    WalletController.transactions.bind(WalletController)
  )

router.get(
    '/wallet/:id', 
    [validationRules.params.required("id")],
    Responder.validate.bind(Responder),
    WalletController.getWallet.bind(WalletController)
  )

module.exports = router;
