const express = require('express')
const router = express.Router()

const db = require("../../mysql")
const equipamento = require('../models/Equipamento.model')
const tipoEquipamento = require('../models/TipoEquipamento.model')


router.post('/cadastro', async (req,res) => {

    const d = new Date();
    const Equipamento = {
        Patrimonio: req.body.patrimonio,
        Status: 0,
        DataCadastro: d,
        tipoEquipamentoId: req.body.tipoEquipamentoId       
    }


    
    equipamento.create(Equipamento)
    .then(retorno => {res.status(201).send(retorno)})
    .catch(err => {res.status(500).send(err.errors[0].message)})

    
})
router.get('/listaEquipamento', async (req,res) => {
    
    const condicao = req.query.id ? {EquipamentoId: req.query.id} : null
    
    await equipamento.findAll({where: condicao, include: {model : tipoEquipamento, as: 'tipoEquipamento', attributes: ['NomeTipo']}, attributes: ['Patrimonio', 'Status', 'DataCadastro']})
    .then(retorno => {
        res.status(200).send(retorno)
    })
    .catch(err => {res.status(500).send(err.errors[0].message)})  
})

module.exports = router