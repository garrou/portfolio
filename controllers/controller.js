const { Router } = require('express');
const { home, projects } = require('../services/service');
const router = Router();

router.get('/', home);
router.get('/projects', projects);

module.exports = router;