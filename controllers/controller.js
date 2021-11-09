const express = require('express');
const service = require('../services/service');
const router = express.Router();

router.get('/', service.home);

module.exports = router;