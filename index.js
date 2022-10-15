//import express from 'express';
//import fs from 'fs';
//import path from 'path';
const express = require('express');
const fs = require('fs');
//import path from 'path';
//const path = require('path');
//import { readFileSync } from 'fs';


const port = 5000;
const app = express();

//app.use(express.static('public'))

//const jsonDirectory = path.join(process.cwd(), 'json');

let json;

//fs.readFile(__dirname + '/table-score.json', 'utf8', function readFileCallback(err, data){
fs.readFile(__dirname + '/table-score.json', 'utf8', (err, data) => {
  if (err){
    console.log(err);
  } else {

    let obj = JSON.parse(data); //now it an object
    //obj.table.push({id: 2, square:3}); //add some data

    obj.push({name: "Luis", score :1740});
    console.log(obj);

    json = JSON.stringify(obj); //convert it back to json
    console.log(json);

    fs.writeFile(__dirname + '/table-score.json', json, 'utf8', err => {
      if (err) throw err;
      console.log('Saved!');
    });

    //obj.push({name: "Luis", score :1740})
    //console.log(obj);
  }
});
/*
console.log(json);

fs.writeFile(__dirname + '/table-score.json', 'asd', 'utf8', err => {
  if (err) throw err;
  console.log('Saved!');
  //err && console.log(err);
  //console.log(json + 'hola');
  //console.log(err.message);
});
*/


/*
app.get('/tableScore', (req, res) => {
    //res.sendFile('table-score.json', {root: path.join(__dirname, 'public')});
    //res.json(obj); // object
    //res.json({nombre: "Lean"});
    //res.json(json); // object string
    res.end(json);
});*/

/*
export default function handler(req, res) {
//export default (req, res) => {
//export default app.get('/tableScore', (req, res) => { 
  const stringified = readFileSync('table-score.json', 'utf8');
  res.setHeader('Content-Type', 'application/json');
  return res.end(stringified);
};
*/
/*
export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/table-score.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}*/

/*
app.get('/tableScore', (req, res) => {
    //res.sendFile('table-score.json', {root: path.join(__dirname, 'public')});
    //res.json(obj); // object
    //res.json({nombre: "Lean"});
    //res.json(json); // object string
    const stringified = readFileSync('table-score.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.json(stringified);
});*/

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




app.get('/api/getData', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // allow Cors
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.json(json);
  //res.json(obj);
});

app.post('/api/test', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // allow Cors
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.json(req);
  res.json(req.body);
  res.json({ message: 'holas' });
  //res.json(obj);
});


/*
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '/api/*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
};
*/



app.listen(port, () => {
    console.log('Server up');
});
//app.listen(process.env.PORT || 3000);

module.exports = app;

//module.exports = allowCors(app);