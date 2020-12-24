const express = require("express");
const fetch = require("node-fetch");
const Router = express.Router();

Router.post("/getAddress", (req, res) => {
  const cep = req.body.cep;

  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = Router;
