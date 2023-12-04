const express = require('express')

const E_trashwayController = require('../controllers/E_trashwayController')

const router = express.Router()

router.get('/about', E_trashwayController.aboutPage)
router.get('/feedback', E_trashwayController.feedbackPage)
router.get('/companies', E_trashwayController.companiesPage)
router.get('/contact', E_trashwayController.contactPage)
router.post('/contact', E_trashwayController.contactSend)

module.exports = router