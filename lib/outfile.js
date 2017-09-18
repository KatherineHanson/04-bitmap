'use strict'

const fs = require('fs')

module.exports = (path, data) => {
  fs.writeFile(path, data, (err) => {
    if (err){
       throw err;
    console.log('The file has been saved!');
  }
  });
}
