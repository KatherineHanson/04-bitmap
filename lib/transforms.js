'use strict';

const fs = require('fs');

// const outfile = require('./outfile.js');

const transforms = module.exports = {};

transforms.whiteout = (data) => {
  let color_table = data.slice(41, 1065);
  for (let i = 0; i < color_table.length; i++) {
    color_table[i] = 255;
  }
  // outfile(outfilename, data);
  // return 'whiteout';
};

transforms.blackout = (data) => {
  let color_table = data.slice(41, 1065);
  for (let i = 0; i < color_table.length; i++) {
    color_table[i] = -255;
  }
  // outfile(outfilename, data);
  // return 'blackout';
};

transforms.invert = (data) => {
  let color_table = data.slice(41, 1065);
  for (let i = 0; i < color_table.length; i++) {
    color_table[i] = 255 - color_table[i];
  }
  // outfile(outfilename, data);
  // return 'invert';
};

transforms.noise = (data) => {
  let color_table = data.slice(41, 1065);
  for (let i = 0; i < color_table.length; i++) {
    if (color_table[i] === 0)
      color_table[i] = Math.random() * 100;
    color_table[i] = 255 - Math.random() * 100;
  }
  // outfile(outfilename, data);
  // return 'noise';
};
