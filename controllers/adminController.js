const User = require('../model/userModel');
const path = require('path')

function getAdmin(req,res){
    res.sendFile(path.join(__dirname, '..', 'public','index.html'));
}

module.exports = {getAdmin};