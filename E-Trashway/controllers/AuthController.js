const bcrypt = require('bcryptjs')
const session = require('express-session')

const User = require('../models/User')
const Point = require('../models/Point')

module.exports = class AuthController {
    static async registerUserSave(request, response) {
        const { name, email, password, passwordConfirm } = request.body

        if (password != passwordConfirm) {
            request.flash('message', 'As senhas informadas não coincidem')

                response.redirect('/register')
                return
        }

        if (await User.findOne({ where: { email } })) {
            request.flash('message', 'O endereço de e-mail informado já está cadastrado')

                response.redirect('/register')
                return
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        try {
            const createdUser = await User.create({ name, email, password: hashedPassword })

            request.session.userId = createdUser.id

            request.flash('message', 'Cadastro realizado com sucesso')

            request.session.save(() => {
                response.redirect('/')
                return
            })
        } catch (error) {
            console.error('Não foi possível cadastrar o usuário, erro: ' + error)
        }
    }

    static async loginUserSave(request, response) {
        const { email, password } = request.body

        const user = await User.findOne({ where: { email: email }})

        if (!user) {
            request.flash('message', 'O endereço de e-mail informado não está cadastrado')

            response.redirect('/login')
            return
        }

        if (!bcrypt.compareSync(password, user.password)) {
            request.flash('message', 'A senha informada está incorreta')

            response.redirect('/login')
            return
        }

        request.session.userId = user.id

        request.flash('message', 'Login realizado com sucesso')

        request.session.save(() => {
            response.redirect('/')
            return
        })
    }

    static loginPage(request, response) {
        return response.render('auth/login')
    }

    static registerPage(request, response) {
        return response.render('auth/register')
    }

    static logoutSave(request, response) {
        request.session.destroy()

        return response.redirect('/')
    }
}