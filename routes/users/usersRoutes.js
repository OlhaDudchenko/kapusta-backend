const express = require('express')
const router = express.Router()
const { asyncWrapper } = require('../../helpers/apiHelpers')
// const { authMiddleware } = require('../../../middlewares/authMiddleware')
const UserController = require('../../controllers/users/userController')


router.post('/register', asyncWrapper((req, res, next) => UserController.register(req, res, next)))

module.exports = router