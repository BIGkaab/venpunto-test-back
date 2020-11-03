//configuracion inical para arrancar el proyecto-----------------------------------
const app = require('./app')
const db = require('./configs/mongoose')
const config = require('./configs/')


//conexion al servidor de mongoDB--------------------------------------------------
db.once('open', () => {
  console.log('conexion a mongoDB')
});

//puerto de esucha de la API-----------------------------------------------------
app.listen(config.port, () => {
  console.log(`API REST corriendo en el servidor http://127.0.0.1:${config.port}`)
});
