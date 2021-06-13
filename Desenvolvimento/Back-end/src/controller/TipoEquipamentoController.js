const express = require('express')
const router = express.Router()

const db = require("../../mysql")
const tipoEquipamento = db.tipoEquipamento


router.post('/cadastro', (req,res) => {

    const TipoEquipamento = {
        NomeTipo: req.body.nomeTipo
    }

    tipoEquipamento.create(TipoEquipamento)
    .then(retorno => {res.status(201).send(retorno)})
    .catch(err => {res.status(500).send(err.errors[0].message)})
})
router.get('/listaTipoEquipamento', (req,res) => {
    tipoEquipamento.findAll()
    .then(retorno => {res.status(200).send(retorno)})
    .catch(err => {res.status(500).send(err.errors[0].message)})
})

module.exports = router