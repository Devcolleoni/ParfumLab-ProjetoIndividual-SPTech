var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.get("/notas", function (req, res) {

    dashboardController.buscarNotas(req, res);

});

router.get("/quantidade", function (req, res) {

    dashboardController.buscarQuantidade(req, res);

});

router.get("/metricas", function (req, res) {

    dashboardController.buscarMetricas(req, res);

});

module.exports = router;