const express = require('express');
const service = require('../services/service');
const router = express.Router();

router.get('/', service.home);
router.get('/projects/:name', service.project);

module.exports = router;