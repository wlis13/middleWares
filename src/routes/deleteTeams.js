const express = require('express');
const teams = require('../data/Teams');

const routes = express.Router();

routes.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((iten) => iten.id !== id);

  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

module.exports = routes;