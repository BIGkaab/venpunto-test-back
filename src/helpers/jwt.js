//*helpers para la gestion de JWT

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../configs/');
const logger = require('../helpers/logger')

//createToken. funcion para codificar el JWT
function createToken(user) {
    const payload = {
        sub: user._id, //!NO se debe usar el ID de mongo porque pone en riesgo la integridad de la DB, aqui esta asi solo por ser una prueba
        iat: moment().unix(), //fecha de creacion del token en formato UNIX
        exp: moment().add(14, 'days').unix(), //fecha de expiracion del token en formato UNIX (+14 dias)
    };
    return jwt.encode(payload, config.token);
}

//decodeToken. funcion para decodificar el JWT
function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.token);
            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado',
                });
            }
            resolve(payload.sub);
        } catch (err) {
            logger.error(`decodeToken (${err})`)
            reject({
                status: 500,
                message: 'Token invalido',
            });
        }
    });

    return decoded;
}

module.exports = {
    createToken,
    decodeToken,
};