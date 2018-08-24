const router = require('express').Router()
const usersController = require('../controllers/users')
const { authenticate } = require('../authentication/authenticate')

router.get('/oauthcallback', usersController.getToken)
router.get('/placeOrder', authenticate, usersController.placeOrder)
router.get('/signout', authenticate, usersController.signout)

module.exports = router
