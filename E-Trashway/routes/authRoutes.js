const express = require('express')

const AuthController = require('../controllers/AuthController')

const router = express.Router()

router.get('/register', AuthController.registerPage)
router.get('/login', AuthController.loginPage)
router.get('/logout', AuthController.logoutSave)
router.post('/register', AuthController.registerUserSave)
router.post('/login', AuthController.loginUserSave)

module.exports = router