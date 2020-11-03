//importar archivos y librerias-----------------------------------------
const express = require('express');
const router = express.Router();
const companyCtrl = require('../controllers/companyCtrl');
const userCtrl = require('../controllers/userCtrl')
const auth = require("../middlewares/userMiddleware");
const validate = require("../validates/")
const companyValidate = require("../validates/companyValidate")
const userValidate = require('../validates/userValidate')

//rutas del CRUD para compañias-----------------------------------------
router.get('/company', auth.userAuth, companyCtrl.getAllCompany)
router.post('/company', auth.userAuth, companyValidate(), validate, companyCtrl.createCompany)
router.put('/company/:companyId', auth.userAuth, companyValidate(), validate, companyCtrl.updateCompany)
router.delete('/company/:companyId', auth.userAuth, companyCtrl.deleteCompany)

//rutas para login y registro de usuar-----------------------------------
router.post('/signup', userValidate(), validate, userCtrl.signUp)
router.post('/signin', userValidate(), validate, userCtrl.signIn)

//----------------------------------------------------------------------
module.exports = router;
