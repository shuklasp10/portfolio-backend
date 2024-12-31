const User = require('../model/userModel');

const getData = (req,res) => {
    User.findOne({name: 'shri prakash shukla'})
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch((e)=>{
        console.log('Error in fetching: ',e)
    })
}

module.exports = {getData}