const express = require('express');
const {getAdmin} = require('../controllers/adminController');
const path = require('path')

const router = express.Router()

router.use('/',express.static(path.join(__dirname,'..','public')));

router.get('/',getAdmin)

module.exports = router