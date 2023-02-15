const generateTokens = () => {
  const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let index = 0; index < 16; index += 1) {
    token += caracters[Math.floor(Math.random() * caracters.length)];
  }
  return token;
};

module.exports = generateTokens;