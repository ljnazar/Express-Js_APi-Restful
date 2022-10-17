const express = require('express');
const fs = require('fs');

const port = 5000;
const app = express();

let json;

fs.readFile(__dirname + '/table-score.json', 'utf8', (err, data) => {
  if (err){
    console.log(err);
  } else {

    let obj = JSON.parse(data); //now it an object

    //obj.push({name: "Luis", score :1740});
    //console.log(obj);

    json = JSON.stringify(obj); //convert it back to json
    console.log(json);

    // Only work local (Vercel does not allow a persistent database)
    /*fs.writeFile(__dirname + '/table-score.json', json, 'utf8', err => {
      if (err) throw err;
      console.log('Saved!');
    });*/

  }
});

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
});

app.listen(port, () => {
    console.log('Server up');
});

module.exports = app;
