const express = require('express')
const router = express.Router()

const db = require("../../mysql")
const usuario = db.usuario



router.post("/cadastro", (req, res) => { 

    
    switch(req.body.tipo)
    {
        case 'Agente':
            req.body.tipo = 0;
            break;
        case 'Aluno':
            req.body.tipo = 1;
            break;
        case 'Professor':
            req.body.tipo = 2;
            break;
    }
    const Usuario = {
        Nome : req.body.nome,
        Usuario : req.body.usuario,
        Senha : req.body.senha,
        Identificacao : req.body.identificacao,
        Tipo : req.body.tipo,
        Email: req.body.email 
    }

    console.log(Usuario)
    
    usuario.create(Usuario)
    .then(retorno => {res.status(201).send(retorno)})
    .catch(err => {res.status(500).send(err.errors[0].message)})
            
})

router.patch('/atualizar/:id', (req, res) => {
    const Usuario = {
        Nome : req.body.nome,
        Usuario : req.body.usuario,
        Senha : req.body.senha,
        Email: req.body.email 
    }

    console.log(Usuario)
    
    usuario.update(Usuario, {where : {UsuarioId: req.params.id}})
    .then(retorno => {res.status(200).send('Usuario atualizado')})
    .catch(err => {res.status(500).send(err.errors[0].message)})
})

router.get('/perfis', (req, res) => {
    const condicao = req.query.usuarioid ? req.query.usuarioid : null
    
    usuario.findAll({where: {UsuarioId: condicao}})
    .then(retorno => {res.status(201).send(retorno)})
    .catch(err => {res.status(500).send(err.errors[0].message)})
})

module.exports = router;