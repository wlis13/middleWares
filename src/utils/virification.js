const verification = (properties, req) =>
  properties
    .every((property) => property in req);

const validateTeam = (req, res, next) => {
  const properties = ['nome', 'sigla'];
  if (verification(properties, req.body)) {
    next();
  } else {
    res.sendStatus(400);
  }
};
module.exports = validateTeam;