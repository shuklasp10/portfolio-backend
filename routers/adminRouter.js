const express = require('express');
const {getAdmin, getSample, postData, patchData} = require('../controllers/adminController');
const path = require('path')

const router = express.Router()

router.use('/',express.static(path.join(__dirname,'..','public')));

router.get('/',getAdmin)
router.get('/sample', getSample)
router.post('/',postData)
router.put('/',patchData)

module.exports = router