'use strict';

const Acessorio = require('../models/Acessorio.model');
const AcessorioSala = require('../models/AcessorioSala.model');

exports.cadastrar = function(req, res) {

    const novoAcessorioSala = new AcessorioSala(req.body);

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        // Obtem a quantidade de acessórios disponível
        Acessorio.obterQuantidade(req.body.acessorioId, function(err, acessorio) {
            if (err) {
                res.send(err);
            }
            
            // Impede o cadastro se o número for insuficiente
            var quantidadeSuficiente = true;

            if (req.body.quantidadeAcessorio > acessorio[0].Quantidade) {
                quantidadeSuficiente = false;
            }

            if(quantidadeSuficiente) {
                // Atualiza a quantidade de acessórios disponíveis
                Acessorio.atualizarQuantidade(req.body.acessorioId, Number(-req.body.quantidadeAcessorio), function(err) {
                    if (err) {
                        res.send(err);
                    }

                    AcessorioSala.cadastrar(novoAcessorioSala, function(err, acessorioSala) {
                        if (err) {
                            res.send(err);
                        }

                        res.json({ erro: false, mensagem: 'AcessorioSala cadastrado com sucesso!', idAcessorioSala: acessorioSala });
                    });
                });
            }
            else {
                res.json({ erro: true, mensagem: 'Quantidade insuficiente do acessório disponível!' });
            }
        });  
    }

};

exports.listarTodos = function(req, res) {

    AcessorioSala.listarTodos(function(err, acessorioSala) {
        if (err) {
            res.send(err);
        }
        //console.log('res', usuario);
        res.send(acessorioSala);
    });

};

exports.listarId = function(req, res) {

    AcessorioSala.listarId(req.params.id, function(err, acessorioSala) {
        if (err) {
            res.send(err);
        }
        res.json(acessorioSala);
    });

};
/*
exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        AcessorioSala.atualizar(req.params.id, new AcessorioSala(req.body), function(err, acessorioSala) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'AcessorioSala atualizado com sucesso!' });
        });
    }
  
};
*/

exports.excluirId = function(req, res) {

    // Obtem a quantidade de acessórios reservada para a sala
    AcessorioSala.listarId(req.params.id, function(err, acessorioSala) {
        if (err) {
            res.send(err);
        }

        // Atualiza a quantidade de acessórios disponíveis
        Acessorio.atualizarQuantidade(acessorioSala[0].AcessorioId, Number(acessorioSala[0].QuantidadeAcessorio), function(err) {
            if (err) {
                res.send(err);
            }

            AcessorioSala.excluirId(req.params.id, function(err, retorno) {
                if (err) {
                    res.send(err);
                }

                res.json({ erro: false, mensagem: 'AcessorioSala excluído com sucesso!' });
            });
        });
    });  

};

exports.excluirTodos = function(req, res) {

    AcessorioSala.listarTodos(function(err, acessorioSala) {
        if (err) {
            res.send(err);
        }

        // Atualiza a quantidade de acessórios disponíveis
        for(let i = 0; i < acessorioSala.length; i++) {
            Acessorio.atualizarQuantidade(acessorioSala[i].AcessorioId, Number(acessorioSala[i].QuantidadeAcessorio), function(err) {
                if (err) {
                    res.send(err);
                }
            });
        }
        
    });

    AcessorioSala.excluirTodos(function(err, acessorioSala) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos os AcessoriosSala excluídos com sucesso!' });
    });

};