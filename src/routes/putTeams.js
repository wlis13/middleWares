const express = require('express');
const teams = require('../data/Teams');
const validateTeam = require('../utils/virification');
// const verification = require('../utils/virification');

const routes = express.Router();

routes.put('/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const propertyById = teams.find((iten) => iten.id === id);
  const index = teams.indexOf(propertyById);
  const newProperty = { id, ...req.body };
  teams.splice(index, 1, newProperty);
  res.status(201).json(newProperty);
});

module.exports = routes;
