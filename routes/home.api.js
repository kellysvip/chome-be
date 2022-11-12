const express = require('express');
const { getHomes } = require('../api/controllers/home/getHomes');
const router = express.Router();

// READ
router.get('/', getHomes);
router.post('/', getHomes);

module.exports = router;