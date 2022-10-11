import express from 'express';
//const express = require('express');
import path from 'path';
//const path = require('path');

const port = 3000;
const app = express();

//const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('table-score.json', {root: path.join(__dirname, 'public')});
    console.log("asd");
})

app.listen(port, () => {
    console.log('Server up');
});
//app.listen(process.env.PORT || 3000);

//module.exports = app;