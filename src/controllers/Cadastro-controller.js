const Cadastro = require('../model/cadastro')

module.exports = {
    async store (req, res) {
        const {nome, senha, email} = req.body

        const cadastro = await Cadastro.create({nome, senha, email})

        return res.json(cadastro) 
    }
}