'use strict';

const fs = require('fs');

const buffer = require('../lib/buffer.js');

const read = module.exports = {};

read.read = (path, callback) => {
  fs.readFile('./__test__/asset/bitmap.bmp', (err, data) => {
    if(err){
      callback(err);
      return;
    }
    let newBuffer = new buffer(path);
    callback(null, newBuffer);
  });
};
