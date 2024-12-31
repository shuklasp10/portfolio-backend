const User = require('../model/userModel');
const path = require('path')
const data = require('../controllers/Data')
const fs = require('fs')

function getAdmin(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
}

function getSample(req, res) {
    fs.writeFile(path.join(__dirname, 'sample.json'), JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.log('file not converted');
        }
        else {
            res.download(path.join(__dirname, 'sample.json'), 'sample.json')
        }
    })

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

module.exports = { getAdmin, getSample, postData };