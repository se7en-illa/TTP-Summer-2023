const router = require('express').Router();

router.use('/todos', require('./todos'));

module.exports = router;
