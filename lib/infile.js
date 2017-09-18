'use strict';

const fs = require('fs');
const loader = require('./buffer.js');

module.exports = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if(err){
      callback(err);
      return;
    }
    const loaded = loader.loadIn(data);
    callback(err, loaded);
  });
};
