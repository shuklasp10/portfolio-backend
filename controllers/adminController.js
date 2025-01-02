const User = require('../model/userModel');
const path = require('path')
const data = require('../controllers/Data')

function getAdmin(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
}

function getSample(req, res) {
    res.setHeader('Content-Disposition', 'attachment; filename="sample.json"');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 2))
}

function postData(req, res) {
    console.log('Request recieved');
    const data = req.body;
    if (data) {
        console.log('Data verfied for: ', typeof data);
        User.findOneAndReplace({ name: 'shri prakash shukla' }, data, { new: true, upsert: true, runValidators: true })
            .then((newData) => {
                console.log('File added in database');
                res.status(200).send('Data uploaded');
            })
            .catch((e) => {
                console.log('File not updated in Database', e)
                res.status(400).send(e)
            })
    }
}

function patchData(req,res) {
    const data = req.body;
    User.findOneAndUpdate({name:'shri prakash shukla' }, data, {new: true, runValidators: true})
    .then((newData)=>{
        console.log(newData);
        res.status(200).send('Updated Succesfully');

    })
    .catch((err)=>{
        res.status(400).send('Error in updating data');
    });
}

module.exports = { getAdmin, getSample, postData, patchData };