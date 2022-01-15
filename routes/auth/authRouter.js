const express = require('express')
const router = express.Router()
const { asyncWrapper } = require('../../helpers/apiHelpers')
// const { authMiddleware } = require('../../../middlewares/authMiddleware')
const authController = require('../../controllers/googleAuth/authController')


router.get('/google', asyncWrapper(authController.googleAuth))
router.get('/google-redirect', asyncWrapper(authController.googleRedirect))

module.exports = router