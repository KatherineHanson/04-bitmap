'use strict';

const transform = require('../lib/transforms.js');
const buffer = require('../lib/buffer.js');

const fs = require('fs');
const bitmap_original = fs.readFileSync(__dirname + '/asset/bitmap.bmp');
const bitmap_whiteout = fs.readFileSync(__dirname + '/asset/bitmap.bmp');
// const bitmap_original = fs.readdirSync(__dirname + '/asset/bitmap.bmp');
// const bitmap_whiteout = fs.readdirSync(__dirname + '/asset/bitmap.bmp');
// const bitmap_original = fs.read(__dirname + '/asset/bitmap.bmp');
// const bitmap_whiteout = fs.read(__dirname + '/asset/bitmap.bmp');
// const bitmap_original = fs.readFileSync(__dirname + '/asset/bitmap.bmp');
// const bitmap_whiteout = fs.readFileSync(__dirname + '/asset/bitmap.bmp');
// console.log(fs.readFileSync('./asset/bitmap.bmp'));
// console.log('test', fs.readFileSync('./asset/bitmap.bmp'));
// const bitmap_blackout = fs.readFile('./asset/whiteout_bitmap.bmp');
// const bitmap_invert = fs.readFile('./asset/invert_bitmap.bmp');
// const bitmap_noise = fs.readFile('./asset/noise_bitmap.bmp');

// define your test fixtures (test data)
// call the public interface of your object
// validate your expectations

describe('transform', () => {
// What does transform.js need to do
// accept valid product valid transform output
  test('whiteout', (done) => {
    // set up myt test data
    buffer.loadIn(bitmap_original);

    // run my code
    transform.whiteout(buffer.buffer);

    // validate my stuff by comparing transformed buffer to test buffer
    // for (something) {
    expect(buffer.buffer).toEqual(bitmap_whiteout);
    // }
    done();
  });
});

// 'use strict';
//
// const infile = require('../lib/infile.js');
//
// describe('infile', () => {
//   test('an invalid path should reject an error', (done) => {
//     infile(`${__dirname}/asset/foo.bmp`, (err, data) => {
//       expect(err).not.toBeNull();
//       expect(data).toBeUndefined();
//       done();
//     });
//   });
//
//   test('a valid path should resolve data', (done) => {
//     infile(`${__dirname}/../__test__/asset/house.bmp`, (err, data) => {
//       expect(err).toBeNull();
//       expect(data).toBeDefined();
//       done();
//     });
//   });
// });
