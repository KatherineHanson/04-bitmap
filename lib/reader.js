'use strict';

const fs = require('fs');
const buffer = require('../lib/buffer.js');

const read = (path, callback) => {
  fs.readFile('./__test__/asset/bitmap.bmp', (err, data) => {
    if(err)
      return callback(err);
    let newBuffer = new buffer(data);
    callback(null, newBuffer);
  });
};

module.exports = {
  read: read,
};
