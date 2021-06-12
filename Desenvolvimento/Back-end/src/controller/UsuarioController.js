const express = require('express')
const router = express.Router()

const db = require("../../mysql")
const usuario = db.usuario



router.post("/cadastro", (req, res) => { 

    if(req.body.usuario.trim().lenght <= 3 || req.body.nome.trim().lenght <= 10 || req.body.senha.trim().lenght <= 3)
    {
        res.send({"Erro": "Os campos nome deve ter o tamanho maior que 10, usuário e senha devem ter o tamanho maior que 3"})
    }
    if(req.body.usuario.trim().lenght > 15 || req.body.nome.trim().lenght > 45 || req.body.senha.trim().lenght > 10)
    {
        res.send({"Erro": "Os campos usuário deve ter valor menor que 16, senha menor que 11 e nome deve ter valor menor que 46"})
    }
    if(req.body.identificacao.trim().lenght != 9)
    {
        res.send({"Erro": "O campo de identificação não pode ter tamanho diferente de 9"})
    }

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
    
    usuario.create({
        Nome : req.body.nome,
        Usuario : req.body.usuario,
        Senha : req.body.senha,
        Identificacao : req.body.identificacao,
        Tipo : req.body.tipo,
        Email: req.body.email
    })
    .then(retorno => {res.status(201).send(retorno)})
    .catch(err => {res.status(500).send(err.errors[0].message)})
})


module.exports = router;