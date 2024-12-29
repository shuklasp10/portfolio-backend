const express = require('express')
const User = require('../model/userModel')

const router = express.Router()

router.get('/',(req,res)=>{
    User.find({}).then((data)=>{
        res.status(200).send(data);
    })
    .catch((e)=>{
        res.status(404).send('data not found');
    })
})

module.exports = router