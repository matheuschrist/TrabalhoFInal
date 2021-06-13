const express = require('express')
const router = express.Router()

const db = require("../../mysql")
const sala = db.sala


router.post('/cadastro', (req,res) => {

    const Sala = {
        NumeroSala: req.body.numeroSala,
        QuantidadeAluno: req.body.quantidadeAluno,
        QuantidadeAlunoPandemia: req.body.quantidadeAlunoPandemia,
        Status: 0,      
    }

    sala.create(Sala)
    .then(retorno => {res.status(201).send(retorno)})
    .catch(err => {res.status(500).send(err.errors[0].message)})
})
router.get('/listaSala', (req,res) => {
    
    const condicao = req.query.id ?{SalaId: req.query.id} : null
    
    sala.findAll({where:  condicao})
    .then(retorno => {
        switch(retorno)
        {
            case 0: 
                retorno.Status = 'Disponível'
                break;
            case 1:
                retorno.Status = 'Em Uso'
                break;
            case 2:
                retorno.Status = 'Debilitado'
                break;
            case 3:
                retorno.Status = 'Em Manutenção' 
        }

        res.status(200).send(retorno)
    })
    .catch(err => {res.status(500).send(err.errors[0].message)})  
})

router.patch('/atualizar/:id', (req, res) => {
    const Sala = {
        QuantidadeAluno: req.body.quantidadeAluno,
        QuantidadeAlunoPandemia: req.body.quantidadeAlunoPandemia,     
    }

    sala.update(Sala, {where: {SalaId: req.params.id}})
    .then(retorno => {res.status(200).send("Sala atualizada com sucesso")})
    .catch(err => {res.status(500).send(err.errors[0].message)}) 
})

module.exports = router