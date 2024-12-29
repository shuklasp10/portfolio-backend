const express = require('express');
const User = require('../model/userModel');

const router = express.Router()


router.get('/',(req,res) => {
        res.status(200).send('admin');
})

module.exports = router