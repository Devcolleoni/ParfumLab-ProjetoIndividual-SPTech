var database = require("../database/config");

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id, nome, email
        FROM Usuario
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    var instrucaoSql = `
        INSERT INTO Usuario (nome, email, senha)
        VALUES ('${nome}', '${email}', '${senha}');
    `;
    return database.executar(instrucaoSql);
}

function atualizarFavorito(idUsuario, idPerfume) {
    var instrucaoSql = `
        UPDATE Usuario 
        SET fkPerfumeFavorito = ${idPerfume}
        WHERE id = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    atualizarFavorito
};