//*configuracion de variables de entorno

module.exports = {
  port: process.env.PORT || 3005,
  db: process.env.MONGODB || 'mongodb://localhost:27017/test',
  token: process.env.TOKEN || 'Sg443w8g41634g8364tq25r64y64r3538464e8y64w3456824r3y53424rG',
};
