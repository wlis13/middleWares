const express = require('express');
const teams = require('../data/Teams');
const validateTeam = require('../utils/virification');

const routes = express.Router();

let nextId = 3;

routes.post('/', validateTeam, (req, res) => {
  const newValue = { id: nextId, ...req.body };
  teams.push(newValue);
  nextId += 1;
  res.status(201).json(newValue);
});

module.exports = routes;