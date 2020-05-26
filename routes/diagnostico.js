var express = require("express");
var router = express.Router();

const Cloudant = require("@cloudant/cloudant");
const { v1 } = require("uuid");
const persistence = require("./persistence");

router.post("/", function (req, res, next) {
  let diagnostico = req.body;

  diagnostico.tipo = "DIAGNOSTICO";
  let id = v1();
  persistence.insert(diagnostico, id);
  res.send(diagnostico)
});

module.exports = router;
