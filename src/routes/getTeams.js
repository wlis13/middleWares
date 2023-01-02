const express = require('express');
const teams = require('../data/Teams');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json(teams);
});

routes.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((iten) => iten.id === id);
  if (team) {
    res.status(200).json(team);
  } else {
    res.sendStatus(404);
  }
});

module.exports = routes;