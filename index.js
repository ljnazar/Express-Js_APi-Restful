import express from 'express';
import fs from 'fs';
//const express = require('express');
//import path from 'path';
//const path = require('path');

const port = 3000;
const app = express();

//app.use(express.static('public'))

let obj;
let json;

fs.readFile('table-score.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    //obj.table.push({id: 2, square:3}); //add some data
    json = JSON.stringify(obj); //convert it back to json
    //fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
}});

app.get('/tableScore', (req, res) => {
    //res.sendFile('table-score.json', {root: path.join(__dirname, 'public')});
    res.json(obj); // object
    //res.json(json); // object string
});

/*
app.route('/events')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
  })
  .get(function (req, res, next) {
    res.json({})
  })
  .post(function (req, res, next) {
    // maybe add a new event...
  })
*/

/*
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})*/

app.listen(port, () => {
    console.log('Server up');
});
//app.listen(process.env.PORT || 3000);

//module.exports = app;