var database = require("../database/config");


function cadastrar(fkUsuario, fkPerfume, qtdEstrela, descricao) {
    var instrucaoSql = `
        INSERT INTO Avaliacao (fkUsuario, fkPerfume, qtdEstrela, descricao)
        VALUES (${fkUsuario}, ${fkPerfume}, ${qtdEstrela}, '${descricao}');
    `;
    return database.executar(instrucaoSql);
}


function listar() {
    var instrucaoSql = `
        SELECT 
            a.id,
            p.nome AS perfume,
            a.qtdEstrela AS nota,
            a.descricao AS comentario,
            DATE_FORMAT(a.dataAvaliacao, '%d/%m/%Y') AS data,
            u.nome AS usuario
        FROM Avaliacao a
        JOIN Usuario u ON a.fkUsuario = u.id
        JOIN Perfume p ON a.fkPerfume = p.id
        ORDER BY a.dataAvaliacao DESC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar
};