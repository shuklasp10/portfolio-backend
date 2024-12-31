const express = require('express')
const { getData } = require('../controllers/clientControllers');

const router = express.Router()

router.get('/',getData)

module.exports = router;