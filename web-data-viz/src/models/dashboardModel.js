var database = require("../database/config");

function buscarNotas() {

    var instrucaoSql = `
        SELECT
            p.nome,
            ROUND(AVG(a.qtdEstrela), 1) AS media
        FROM Avaliacao a
        JOIN Perfume p
            ON a.fkPerfume = p.id
        GROUP BY p.nome;
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarQuantidade() {

    var instrucaoSql = `
        SELECT
            p.nome,
            COUNT(a.id) AS quantidade
        FROM Avaliacao a
        JOIN Perfume p
            ON a.fkPerfume = p.id
        GROUP BY p.nome;
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarMetricas() {

    var instrucaoSql = `
        SELECT

        (
            SELECT p.nome
            FROM Avaliacao a
            JOIN Perfume p
                ON a.fkPerfume = p.id
            GROUP BY p.nome
            ORDER BY COUNT(a.id) DESC
            LIMIT 1
        ) AS maisAvaliado,

        (
            SELECT p.nome
            FROM Avaliacao a
            JOIN Perfume p
                ON a.fkPerfume = p.id
            GROUP BY p.nome
            ORDER BY COUNT(a.id) ASC
            LIMIT 1
        ) AS menosAvaliado,

        (
            SELECT COUNT(*)
            FROM Avaliacao
        ) AS totalAvaliacoes;
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarNotas,
    buscarQuantidade,
    buscarMetricas
};