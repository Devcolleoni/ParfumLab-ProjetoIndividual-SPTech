var dashboardModel = require("../models/dashboardModel");

function buscarNotas(req, res) {

    dashboardModel.buscarNotas()
        .then(function (resultado) {

            res.json(resultado);

        })
        .catch(function (erro) {

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });

}

function buscarQuantidade(req, res) {

    dashboardModel.buscarQuantidade()
        .then(function (resultado) {

            res.json(resultado);

        })
        .catch(function (erro) {

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });

}

function buscarMetricas(req, res) {

    dashboardModel.buscarMetricas()
        .then(function (resultado) {

            res.json(resultado);

        })
        .catch(function (erro) {

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        });

}

module.exports = {

    buscarNotas,
    buscarQuantidade,
    buscarMetricas

};