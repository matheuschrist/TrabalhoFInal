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
        Acessorio.obterQuantidade(req.body.acessorioId, function(err, qtdAcessorio) {
            if (err) {
                res.send(err);
            }

            // Impede o cadastro se o número for insuficiente
            var quantidadeSuficiente = true;

            if (req.body.quantidadeAcessorio > qtdAcessorio) {
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

    if(req.query.limite) {
        // Assume página 1 caso ela não seja especificada
        if(req.query.pagina == null) {
            req.query.pagina = '1';
        }
        // Lista de acordo com o limite e a página especificados
        AcessorioSala.listarPagina(Number(req.query.limite), Number(req.query.pagina), function(err, acessorioSala) {
            if (err) {
                res.send(err);
            }
            res.send(acessorioSala);
        });
    }
    else {
        // Lista todos se nenhum limite for especificado
        AcessorioSala.listarTodos(function(err, acessorioSala) {
            if (err) {
                res.send(err);
            }
            res.send(acessorioSala);
        });
    }     

};

exports.listarId = function(req, res) {

    AcessorioSala.listarId(req.params.id, function(err, acessorioSala) {
        if (err) {
            res.send(err);
        }
        res.json(acessorioSala);
    });

};

exports.pesquisar = function(req, res) {

    AcessorioSala.pesquisar(req.query.id, req.query.idAcessorio, req.query.idSala, req.query.qtdAcessorio, function(err, acessorio) {
        if (err) {
            res.send(err);
        }
        res.send(acessorio);
    });

}

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