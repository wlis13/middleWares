const express = require('express');
const teams = require('../data/Teams');

const routes = express.Router();

let nextId = 3;

routes.post('/', (req, res) => {
  const newValue = { id: nextId, ...req.body };
  teams.push(newValue);
  nextId += 1;
  res.status(201).json(teams);
});

module.exports = routes;