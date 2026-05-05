var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    console.log('Entrou na Funcao')
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    
    if (!email || !senha) {
        res.status(400).send("Dados inválidos!");
        
        return;
    }

    usuarioModel.autenticar(email, senha)
        .then(function (resultado) {

            if (resultado.length == 1) {
                res.json({
                    id: resultado[0].id,
                    nome: resultado[0].nome,
                    email: resultado[0].email
                });
            } else {
                res.status(403).send("Email ou senha inválidos");
            }

        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined || email == undefined || senha == undefined) {
        res.status(400).send("Dados inválidos!");
        return;
    }

    usuarioModel.cadastrar(nome, email, senha)
        .then(() => res.status(200).send("Cadastro realizado"))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function atualizarFavorito(req, res) {
    var idUsuario = req.body.idUsuario;
    var idPerfume = req.body.idPerfume;

    if (idUsuario == undefined || idPerfume == undefined) {
        res.status(400).send("Dados inválidos!");
        return;
    }

    usuarioModel.atualizarFavorito(idUsuario, idPerfume)
        .then(() => res.status(200).send("Favorito atualizado"))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

module.exports = {
    autenticar,
    cadastrar,
    atualizarFavorito
};