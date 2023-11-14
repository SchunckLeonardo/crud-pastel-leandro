const PastelModel = require('../models/Pastel')

class Pastel {

    async getAll(req, res) {
        try {
            let pasteis = await PastelModel.findAll()
            res.status(200)
            res.json(pasteis)
        } catch (err) {
            res.status(500)
            throw new Error(err)
        }
    }

    async getById(req, res) {
        let id = req.params.id
        try {
            let pastel = await PastelModel.findByPk(id)
            if(pastel) {
                res.json(pastel)
                res.status(200)
            } else {
                res.status(404)
                res.json({msg: "Nenhum pastél encontrado"})
            }
        } catch(err) {
            res.status(500)
            throw new Error(err)
        }
    }

    async create(req, res) {
        let { pastel_type, pastel_price } = req.body
        try {
            let pastel = await PastelModel.findOne({where: {pastel_type}})
            if(pastel) {
                res.status(400)
                res.json({msg: "Pastél já existe!"})
            } else {
                PastelModel.create({
                    pastel_type,
                    pastel_price
                }).then(() => {
                    res.status(201)
                    res.json({ msg: "Criado com sucesso" })
                }).catch(err => {
                    res.status(500)
                    throw new Error(err)
                })
            }
        } catch(err) {
            throw new Error(err)
        }
    }

    async update(req, res) {
        let id = req.params.id
        let { pastel_type, pastel_price } = req.body
        try {
            await PastelModel.update({ pastel_type, pastel_price }, { where: { id } })
            res.status(200)
            res.json({ msg: "Editado com sucesso" })
        } catch (err) {
            res.status(500)
            throw new Error(err)
        }
    }

    async delete(req, res) {
        let id = req.params.id
        try {
            await PastelModel.destroy({
                where: { id }
            })
            res.status(200)
            res.json({msg: "Deletado com sucesso"})
        } catch (err) {
            res.status(500)
            throw new Error(err)
        }
    }

}

module.exports = new Pastel()