//*conexion y configuracion a mongoDB a traves del ORM mongoose-----------------

const mongoose = require('mongoose');
const config = require('./') //llama al archivo config/index.js de la misma ruta
const logger = require('../helpers/logger')

//conexion a mongoDB-------------------------------------------------------------
mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
})
  .catch(err => logger.error(`mongoose.connect (${err})`))

const db = mongoose.connection;

//-------------------------------------------------------------------------------
module.exports = db