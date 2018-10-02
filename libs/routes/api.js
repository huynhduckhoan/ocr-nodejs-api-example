var express = require('express');
var router = express.Router();
var Tesseract = require('tesseract.js');
var request = require('request');
var fs = require('fs');
var randomName = require('../functions/random_name.js');

var writeFile = fs.createWriteStream('imgs/' + randomName)

router.get('/', function (req, res) {
    res.json({
        msg: 'API is running...'
    });
});

router.post('/', function (req, res) {
    var img_url = req.body.img_url;
    request(img_url).pipe(writeFile).on('close', function() {
        console.log(img_url, 'saved to', randomName)
        Tesseract.recognize('imgs/' + randomName,{lang: 'vie'})
        .progress(function  (p) { console.log('progress', p)  })
        .catch(err => console.error(err))
        .then(function (result) {
          console.log(result.text)
            res.json({
                text: result.text
            });
        })
    })
});

module.exports = router;