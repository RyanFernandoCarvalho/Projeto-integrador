const { Op } = require('sequelize')

const Companie = require('../models/Companie')
const Message = require('../models/Message')
const session = require('express-session')

module.exports = class E_trashwayController {
    static homePage(request, response) {
        return response.render('e_trashway/home')
        console.log(request.session.userId);
    }

    static aboutPage(request, response) {
        return response.render('e_trashway/about')
    }

    static async companiesPage(request, response) {
        var search = request.query.search

        if(!search){
            search = ''
        }

        const companies = await Companie.findAll({ where: { name: { [Op.like]: `%${search}%` } }, raw:true })

        return response.render('e_trashway/companies', { companies })
    }

    static contactPage(request, response) {
        return response.render('e_trashway/contact')
    }

    static feedbackPage(request, response) {
        return response.render('e_trashway/feedback')
    }

    static async contactSend(request, response) {
        console.log(request.body);
        const { email, message, companie } = request.body
        var userId = request.session.userId

        if(!userId){
            userId = null
        }

        await Message.create({ email, message, userId, companieId:companie })

        response.redirect('/e_trashway/contact')
    }
}