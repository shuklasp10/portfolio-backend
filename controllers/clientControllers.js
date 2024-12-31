const data = require('./Data')

const getData = (req,res) => {
    if(data){
        res.status(200).send(data)
    }
    else{
        res.status(400).send('data not found');
    }
}

module.exports = {getData}