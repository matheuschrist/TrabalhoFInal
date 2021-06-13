const express = require('express')
const router = express.Router()

const db = require("../../mysql")
const equipamento = db.equipamento


router.post('/cadastro', (req,res) => {

    const d = new Date();
    const Equipamento = {
        Patrimonio: req.body.patrimonio,
        TipoEquipamentoId: req.body.tipoEquipamentoId,
        Status: 0,
        DataCadastro: d,       
    }

    equipamento.create(Equipamento)
    .then(retorno => {res.status(201).send(retorno)})
    .catch(err => {res.status(500).send(err.errors[0].message)})
})
router.get('/listaEquipamento', (req,res) => {
    
    const condicao = req.query.id ? req.query.id : null
    
    equipamento.findAll({where: {EquipamentoId: condicao}})
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
                retorno.Status = 'Indisponível'
                break;
            case 4:
                retorno.Status = 'Em Manutenção' 
        }

        res.status(200).send(retorno)
    })
    .catch(err => {res.status(500).send(err.errors[0].message)})  
})

module.exports = router