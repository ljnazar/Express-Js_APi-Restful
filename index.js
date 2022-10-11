//import express from 'express';
//import fs from 'fs';
//import path from 'path';
const express = require('express');
const fs = require('fs');
//import path from 'path';
const path = require('path');
//import { readFileSync } from 'fs';

const port = 5000;
const app = express();

//app.use(express.static('public'))

//const jsonDirectory = path.join(process.cwd(), 'json');


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




const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug} ${json} ${obj}`);
});






app.listen(port, () => {
    console.log('Server up');
});
//app.listen(process.env.PORT || 3000);

module.exports = app;