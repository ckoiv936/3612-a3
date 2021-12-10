//Parse artists json file
const path = require('path');
const fs = require('fs');

const jsonPath = path.join(__dirname,"../data","artists.json");
const jsonData = fs.readFileSync(jsonPath,"utf8");
const artistdata = JSON.parse(jsonData);

module.exports = artistdata;