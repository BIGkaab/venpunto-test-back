//*APP guarda la configuracion de express---------------------------------------
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const router = require('./routes')
require('dotenv').config({ path: 'src/configs/.env' });

//-------------------------------------------------------------------------------
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/venpunto', router);

//-------------------------------------------------------------------------------
module.exports = app;
