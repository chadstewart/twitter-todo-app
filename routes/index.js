const express = require('express');
const router = express.Router();

const index_controller = require('../controllers/indexController');

router.get('/', index_controller.index_redirect);
router.get('/home', index_controller.index_home);

module.exports = router;