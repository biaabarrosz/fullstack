const express = require('express');
const router = express.Router();
const presencasController = require('../controllers/presencasController');

router.get('/', presencasController.getAllPresencas);
router.post('/', presencasController.createPresenca);
router.put('/:id', presencasController.updatePresenca);
router.delete('/:id', presencasController.deletePresenca);

module.exports = router;
