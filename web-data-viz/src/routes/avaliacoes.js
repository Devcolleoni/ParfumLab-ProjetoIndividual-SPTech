var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");


router.post("/cadastrar", function (req, res) {
    avaliacaoController.cadastrar(req, res);
});


router.get("/listar", function (req, res) {
    avaliacaoController.listar(req, res);
});

module.exports = router;