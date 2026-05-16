var database = require("../database/config");

function buscarNotas() {

    var instrucaoSql = `

        SELECT
            perfume.nome,
            ROUND(AVG(avaliacao.qtdEstrela), 1) AS media
        FROM avaliacao
        JOIN perfume
            ON avaliacao.fkPerfume = perfume.id
        GROUP BY perfume.nome;

    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);

}

function buscarQuantidade() {

    var instrucaoSql = `

        SELECT
            perfume.nome,
            COUNT(avaliacao.id) AS quantidade
        FROM avaliacao
        JOIN perfume
            ON avaliacao.fkPerfume = perfume.id
        GROUP BY perfume.nome;

    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);

}

function buscarMetricas() {

    var instrucaoSql = `

        SELECT

        (
            SELECT perfume.nome
            FROM avaliacao
            JOIN perfume
                ON avaliacao.fkPerfume = perfume.id
            GROUP BY perfume.nome
            ORDER BY COUNT(avaliacao.id) DESC
            LIMIT 1
        ) AS maisAvaliado,

        (
            SELECT perfume.nome
            FROM avaliacao
            JOIN perfume
                ON avaliacao.fkPerfume = perfume.id
            GROUP BY perfume.nome
            ORDER BY COUNT(avaliacao.id) ASC
            LIMIT 1
        ) AS menosAvaliado,

        (
            SELECT COUNT(*)
            FROM avaliacao
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