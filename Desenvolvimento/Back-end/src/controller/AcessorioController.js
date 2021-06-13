const express = require('express')
const router = express.Router()

const db = require("../../mysql")
const acessorio = db.acessorio


router.post('/cadastro', (req,res) => {

    const Sala = {
        Tipo: req.body.tipo,
        Quantidade: req.body.quantidade,    
    }

    acessorio.create(Sala)
    .then(retorno => {res.status(201).send(retorno)})
    .catch(err => {res.status(500).send(err.errors[0].message)})
})
router.get('/listaAcessorio', (req,res) => {
    
    const condicao = req.query.id ?{AcessorioId: req.query.id} : null
    
    acessorio.findAll({where:  condicao})
    .then(retorno => {
        res.status(200).send(retorno)
    })
    .catch(err => {res.status(500).send(err.errors[0].message)})  
})

router.patch('/atualizar/:id', (req, res) => {
    const Acessorio = {
        Quantidade: req.body.quantidade    
    }

    acessorio.update(Acessorio, {where: {AcessorioId: req.params.id}})
    .then(retorno => {res.status(200).send("Sala atualizada com sucesso")})
    .catch(err => {res.status(500).send(err.errors[0].message)}) 
})

module.exports = router