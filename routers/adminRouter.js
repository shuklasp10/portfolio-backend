const express = require('express');
const {getAdmin, getSample, postData} = require('../controllers/adminController');
const path = require('path')

const router = express.Router()

router.use('/',express.static(path.join(__dirname,'..','public')));

router.get('/',getAdmin)
router.post('/',postData)
router.get('/sample', getSample)

module.exports = router