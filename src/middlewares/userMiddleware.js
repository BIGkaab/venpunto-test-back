//*middleware de autenticacion de usuario por JWT

const tokenSercive = require('../helpers/jwt');

function userAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'No tienes autorizacion', code: '02' });
  }
  const token = req.headers.authorization;
  tokenSercive
    .decodeToken(token)
    .then((response) => {
      req.user = response;
      next();
    })
    .catch((response) => {
      res.status(response.status);
    });
}

module.exports = {
  userAuth,
};
