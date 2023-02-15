const fs = require('fs').promises;

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

 const apiCredentials = async (req, res, next) => {
  // pega o token do cabeçalho, se houver
  const token = req.get('Authorization');
  // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)
  const authdata = await fs.readFile('./', { encoding: 'utf-8' });
  // readFile nos deu uma string, agora vamos carregar um objeto a partir dela
  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    next(); // pode continuar
  } else {
    res.sendStatus(401);
  }
 };
module.exports = {
  validateTeam,
  apiCredentials,
};
