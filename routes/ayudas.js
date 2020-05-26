var express = require("express");
var router = express.Router();

const Cloudant = require("@cloudant/cloudant");
const { v1 } = require("uuid");
const persistence = require("./persistence");

router.post("/", function (req, res, next) {
  let ayuda = req.body;

  ayuda.tipo = "AYUDA";
  let id = v1();
  persistence.insert(ayuda, id);
  res.send(ayuda)
});

module.exports = router;
