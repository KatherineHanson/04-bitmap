'use strict';
const infile = require('../index.js')

describe('test should be error', () => {
  test('file should be cause an error', (done) =>{
    reader([`${__dirname}/__test__/assets/house.txt`], (err, data) => {
      expect(err).not.toBeNull()
      expect(data).toBeUndefined()
      done();
    })
  })
  // test('file should be read and data extracted', (done) =>{
  //   reader([`${__dirname}/__test__/assets/house.bmp`], (err, data) => {
  //     expect(err).not.toBeNull()
  //     expect(data).toequal(d);
  //     done();
  //   })
  // })
})
