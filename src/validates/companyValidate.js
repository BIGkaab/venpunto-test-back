//*validar request del formulario de compañias

const {
    body
} = require('express-validator')


const companyValidate = () => {
    return [
        body('name', 'name, string requerido con el nombre de la compañia de 5 caracteres minimo')
        .isString()
        .isLength({
            min: 5
        }),
        body('rif', 'rif, string requerido con el rif de la compañia de 9 caracteres exactos')
        .isString()
        .isLength({
            min: 9,
            max: 9
        }),
        body('description', 'description, string requerido con la descripcion compañia entre 15 y 200 caracteres')
        .isString()
        .isLength({
            min: 15,
            max: 200
        }),
    ]
}

module.exports = companyValidate