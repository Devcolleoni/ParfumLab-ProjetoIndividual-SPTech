var avaliacaoModel = require("../models/avaliacaoModel");

function cadastrar(req, res) {

    var fkUsuario = req.body.fkUsuario;
    var fkPerfume = req.body.fkPerfume;
    var qtdEstrela = req.body.qtdEstrela;
    var descricao = req.body.descricao;

    if (fkUsuario == undefined || fkPerfume == undefined || qtdEstrela == undefined) {
        res.status(400).send("Dados incompletos!");
        return;
    }

    avaliacaoModel.cadastrar(fkUsuario, fkPerfume, qtdEstrela, descricao)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function listar(req, res) {

    avaliacaoModel.listar()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    listar
};