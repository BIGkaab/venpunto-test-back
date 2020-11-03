//*validar requiest del formulario de usario

const {
    body
} = require('express-validator')


const companyValidate = () => {
    return [
        body('email', 'email, string requerido con la direccion de correo electronico del usuario')
        .isEmail(),
        body('password', 'password, string requerido con la clave del usuario entre 8 y 20 caracteres')
        .isString()
        .isLength({
            min: 8,
            max: 20
        }),
    ]
}

module.exports = companyValidate