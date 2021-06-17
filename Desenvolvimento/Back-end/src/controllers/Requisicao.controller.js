'use strict';

const Requisicao = require('../models/Requisicao.model');
var RequisicaoSala = require('../models/RequisicaoSala.model');
var Sala = require('../models/Sala.model');
var Equipamento = require('../models/Equipamento.model');
var RequisicaoEquipamento = require('../models/RequisicaoEquipamento.model')
var RequisicaoTipoEquipamento = require('../models/RequisicaoTipoEquipamento.model')
var RequisicaoAcessorio = require('../models/RequisicaoAcessorio.model')

exports.cadastrar = function(req, res) {

    const novoRequisicao = new Requisicao(req.body);

    novoRequisicao.dataAbertura = new Date();

    console.log(req.body.salaId)


    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        Requisicao.cadastrar(novoRequisicao, function(err, requisicao) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Requisicao cadastrada com sucesso!', idRequisicao: requisicao });
            if(req.body.salaId.length > 0)
            {
                for(let i=0; i<req.body.salaId.length; i++)
                {
                    var requisicaoSala = new RequisicaoSala({
                        requisicaoId : requisicao,
                        salaId : req.body.salaId[i]
                    })
                    RequisicaoSala.cadastrar(requisicaoSala , function(err,res)
                    {
                        if(err)
                        {
                            console.log(err)
                        }
                        else
                        {
                            console.log(res)
                        }
                    })
                }
            }
            else
            {
                if(req.body.tipoEquipamentoId.length > 0 && req.body.acessorioId.length > 0)
                {
                    for(let i=0; i<req.body.tipoEquipamentoId.length; i++)
                    {
                        var requisicaoEquipamento = new RequisicaoTipoEquipamento({
                            requisicaoId : requisicao,
                            tipoEquipamentoId : req.body.tipoEquipamentoId[i],
                            quantidadeSolicitada: req.body.quantidadeSolicitada[i]
                        })
                        RequisicaoTipoEquipamento.cadastrar(requisicaoEquipamento , function(err,res)
                        {
                            if(err)
                            {
                                console.log(err)
                            }
                            else
                            {
                                console.log(res)
                            }
                        })
                    }
                    for(let i=0; i<req.body.acessorioId.length; i++)
                    {
                        var requisicaoAcessorio = new RequisicaoAcessorio({
                            requisicaoId : requisicao,
                            acessorioId : req.body.acessorioId[i],
                            quantidadeAcessorio: req.body.quantidadeAcessorio[i]
                        })
                        RequisicaoAcessorio.cadastrar(requisicaoAcessorio, function(err, res) {
                            if(err)
                            {
                                console.log(err)
                            }
                            else
                            {
                                console.log(res)
                            }
                        })
                    }
                }
                else if(req.body.tipoEquipamentoId.length > 0)
                {
                    for(let i=0; i<req.body.tipoEquipamentoId.length; i++)
                    {
                        var requisicaoEquipamento = new RequisicaoTipoEquipamento({
                            requisicaoId : requisicao,
                            tipoEquipamentoId : req.body.tipoEquipamentoId[i],
                            quantidadeSolicitada: req.body.quantidadeSolicitada[i]
                        })
                        RequisicaoTipoEquipamento.cadastrar(requisicaoEquipamento , function(err,res)
                        {
                            if(err)
                            {
                                console.log(err)
                            }
                            else
                            {
                                console.log(res)
                            }
                        })
                    }
                }
                else
                {
                    for(let i=0; i<req.body.acessorioId.length; i++)
                    {
                        var requisicaoAcessorio = new RequisicaoAcessorio({
                            requisicaoId : requisicao,
                            acessorioId : req.body.acessorioId[i],
                            quantidadeAcessorio: req.body.quantidadeAcessorio[i]
                        })
                        RequisicaoAcessorio.cadastrar(requisicaoAcessorio, function(err, res) {
                            if(err)
                            {
                                console.log(err)
                            }
                            else
                            {
                                console.log(res)
                            }
                        })
                    }
                }
            }  
        });
    }

};

exports.listarTodos = function(req, res) {

    if(req.query.limite) {
        // Assume página 1 caso ela não seja especificada
        if(req.query.pagina == null) {
            req.query.pagina = '1';
        }
        // Lista de acordo com o limite e a página especificados
        Requisicao.listarPagina(Number(req.query.limite), Number(req.query.pagina), function(err, requisicao) {
            if (err) {
                res.send(err);
            }
            res.send(requisicao);
        });
    }
    else {
        // Lista todos se nenhum limite for especificado
        Requisicao.listarTodos(function(err, requisicao) {
            if (err) {
                res.send(err);
            }
            res.send(requisicao);
        });
    }

};

exports.listarId = function(req, res) {

    Requisicao.listarId(req.params.id, function(err, requisicao) {
        if (err) {
            res.send(err);
        }
        res.json(requisicao);
    });

};

exports.pesquisar = function(req, res) {

    Requisicao.pesquisar(req.query.id, req.query.tipo, req.query.status, req.query.turno, req.query.dataUtilizacao, req.query.dataAbertura,
                         req.query.dataEntrega, req.query.dataCancelamento, req.query.dataConclusao, req.query.usuarioId, function(err, requisicao) {
        if (err) {
            res.send(err);
        }
        res.send(requisicao);
    });

}

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        Requisicao.atualizar(req.params.id, new Requisicao(req.body), function(err, requisicao) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Requisicao atualizada com sucesso!' });

            if(req.status === 1)
            {
                let salaAt = RequisicaoSala.listarAssociacaoReq(req.params.id);                
                for(let i=0; i<salaAt.length; i++)
                {
                    Sala.atualizarSatus(salaAt[i])
                }               
            }
            if(req.status === 2)
            {
                let salaAt = RequisicaoSala.listarAssociacaoReq(req.params.id);                
                for(let i=0; i<salaAt.length; i++)
                {
                    Sala.atualizarSatus(salaAt[i])
                }
                for(let i=0; i<req.body.equipamentoId.length; i++)
                {
                    Equipamento.atualizar(req.body.equipamentoId[i])
                }               
            }
            if(req.status === 3)
            {
                let salaAt = RequisicaoSala.listarAssociacaoReq(req.params.id);                
                for(let i=0; i<salaAt.length; i++)
                {
                    Sala.atualizarSatus(salaAt[i])
                }
                for(let i=0; i<req.body.equipamentoId.length; i++)
                {
                    Equipamento.atualizar(req.body.equipamentoId[i])
                } 
            }
            if(req.status === 4)
            {
                let salaAt = RequisicaoSala.listarAssociacaoReq(req.params.id);                
                for(let i=0; i<salaAt.length; i++)
                {
                    Sala.atualizarSatus(salaAt[i])
                }
                for(let i=0; i<req.body.equipamentoId.length; i++)
                {
                    Equipamento.atualizar(req.body.equipamentoId[i])
                } 
            }
        });
    }
  
};


exports.excluirId = function(req, res) {

    Requisicao.excluir(req.params.id, function(err, requisicao) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Requisicao excluída com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    Requisicao.excluirTodos(function(err, requisicao) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos as Requisicoes excluídas com sucesso!' });
    });

};