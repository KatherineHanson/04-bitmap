'use strict';

const fs = require('fs');

const outfile = module.exports = {};

outfile.writeIn = (outfilename, data) => {
  fs.writeFile(outfilename, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};
