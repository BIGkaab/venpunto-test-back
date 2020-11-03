//*controlador para la gestion del usuario
//!este debe estar mejor modulado para proyectos mas complejos, aqui no lo esta por ser un caso "sencillo".

const User = require('../models/userMod');
const tokenSercive = require('../helpers/jwt');
const logger = require('../helpers/logger');

//registro de usuario----------------------------------------------
async function signUp(req, res) {
  const {
    email,
    password
  } = req.body
  const newUser = new User({
    email,
    password
  })
  try {
    await newUser.save()
    res.status(200).send({
      code: '00',
      message: 'Usuario registradro Exitosamente',
      token: tokenSercive.createToken(newUser)
    });
  } catch (err) {
    logger.error(`signUp (${err})`)
    return res.status(500).send({
      message: `Error in signUp: ${err}`,
      code: '01'
    })
  }
}

//autenticar usuario registrado---------------------------------------
async function signIn(req, res) {
  const {
    email,
    password
  } = req.body
  try {
    const user = await User.find({
      email,
      password
    });
    if (user.length == 0)
      return res.status(404).send({
        code: '100',
        message: 'Usuario no existe'
      });
    res.status(200).send({
      code: '00',
      message: 'Te has logueado correctamente',
      token: tokenSercive.createToken(user),
    });
  } catch (err) {
    logger.error(`signIn (${err})`)
    return res
      .status(500)
      .send({
        code: '01',
        message: `Error al realizar la busqueda ${err}`
      });
  }
}

//--------------------------------------------------------------------------
module.exports = {
  signUp,
  signIn,
};