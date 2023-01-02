const express = require('express');

const getTeams = require('./routes/getTeams');
const postTeams = require('./routes/postTeams');
const putTeams = require('./routes/putTeams');
const deleteTeams = require('./routes/deleteTeams');

const app = express();
app.use(express.json());

app.use('/teams', getTeams);
app.use('/teams', postTeams);
app.use('/teams', putTeams);
app.use('/teams', deleteTeams);

module.exports = app;