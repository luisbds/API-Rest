const Material = require('../model/cadastro')

module.exports = {
    async store (req, res) {
        const {nome, tipo, obs} = req.body

        const material = await Material.create({nome, tipo, obs}) 

        return res.json(material) 
    }
}