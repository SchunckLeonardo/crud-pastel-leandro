const PastelModel = require('../models/Pastel')

class Pastel {

    async getAll(req, res) {
        try {
            let pasteis = await PastelModel.findAll()
            res.json(pasteis)
        } catch (err) {
            throw new Error(err)
        }
    }

    async getById(req, res) {
        let id = req.params.id
        try {
            let pastel = await PastelModel.findByPk(id)
            if(pastel) {
                res.json(pastel)
            } else {
                res.json({msg: "Nenhum pastél encontrado"})
            }
        } catch(err) {
            throw new Error(err)
        }
    }

    async create(req, res) {
        let { pastel_type, pastel_price } = req.body
        PastelModel.create({
            pastel_type,
            pastel_price
        }).then(() => {
            res.json({ msg: "Criado com sucesso" })
        }).catch(err => {
            throw new Error(err)
        })
    }

    async update(req, res) {
        let id = req.params.id
        let { pastel_type, pastel_price } = req.body
        try {
            await PastelModel.update({ pastel_type, pastel_price }, { where: { id } })
            res.json({ msg: "Editado com sucesso" })
        } catch (err) {
            throw new Error(err)
        }
    }

    async delete(req, res) {
        let id = req.params.id
        try {
            await PastelModel.destroy({
                where: { id }
            })
            res.json({msg: "Deletado com sucesso"})
        } catch (err) {
            throw new Error(err)
        }
    }

}

module.exports = new Pastel()