const {Router}=require('express');
const router = Router();

const {getProfesores} = require('../controllers/profesoresControl.js');
const {getProfesoresC} = require('../controllers/profesoresControl.js');
const {getProfesoresP} = require('../controllers/profesoresControl.js');

router.route('/').get(getProfesores)
router.route('/coordinador').get(getProfesoresC)
router.route('/practico').get(getProfesoresP)

module.exports = router
