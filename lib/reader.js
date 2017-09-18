'use strict';

const fs = require('fs');

// const aBuffer = require('../lib/buffer.js');

const reader = module.exports = {};

reader.read = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if(err)
      return callback(err);
    callback(null, data);
  });
};
