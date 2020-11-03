//*controlador para el CRUD de compañias
//!este debe estar mejor modulado para proyectos mas complejos, aqui no lo esta por ser un caso "sencillo".

const Company = require('../models/companyMod')
const logger = require('../helpers/logger')

//getAllCompany. listar todas las companias---------------------------------
async function getAllCompany(req, res) {
    try {
        const companies = await Company.find();
        if (companies.length == 0) {
            return res.status(404).send({
                message: `NO existen compañias registradas`,
                code: "100"
            });
        }
        return res.status(200).send({
            code: '00',
            companies: companies
        });
    } catch (err){
        logger.error(`getAllCompany (${err})`)
        return res.status(500).send({
            message: `Error al consultar las compañias`,
            code: '01'
        });
    }
}

//createCompany. registrar compañias-------------------------------------
async function createCompany(req, res) {
    const { name, rif, description } = req.body
    const newCompany = new Company({ name, rif, description });
    try {
        await newCompany.save()
        res.status(200).send({
            message: 'Compañia registrada',
            code: '00',
            company: newCompany
        })
    } catch (err) {
        logger.error(`createCompany (${err})`)
        return res.status(500).send({
            message: `Error in createCompany: ${err}`,
            code: '01'
        })
    }
}

//updateCompany. modificar compañias-------------------------------------
async function updateCompany(req, res) {
    const companyId = req.params.companyId;
    const { name, rif, description } = req.body
    try {
        const company = await Company.findByIdAndUpdate(
        { _id: companyId },
        { $set: { name, rif, description } },
        { new: false }
        );
        if (!company)
            return res.status(404).send({
                code: '100',
                message: 'Compania no encontrada'
            });
        res.status(200).send({
            code: '00',
            company: company
        });
    } catch (err) {
        logger.error(`updateCompany (${err})`)
        res.status(500).send({
            code: '01',
            message: `Error al actualizar la compania: ${err}`
        });
    }
}

//deleteCompany. eliminar compañias----------------------------------------
async function deleteCompany(req, res) {
  const companyId = req.params.companyId;
  try {
    const company = await Company.findByIdAndRemove({ _id: companyId });
    if (!company)
        return res.status(404).send({
            code: '100',
            message: 'Compañia no encontrada'
        });
      res.status(200).send({
          code: '00',
          message: 'Compañia eliminada'
      });
  } catch (err) {
      logger.error(`deleteCompany (${err})`)
      res.status(500).send({
          code: '01',
          message: `Error al eliminar la Compañia: ${err}`
      });
  }
}

//-------------------------------------------------------------------------------
module.exports = {
    getAllCompany,
    createCompany,
    updateCompany,
    deleteCompany
}