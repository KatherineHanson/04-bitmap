'use strict';
const reader= require('../index.js');
const transforms = require('../lib/imageParser.js');
const parse = require('../lib/imageParser.js');


describe('Buffer', () => {
  test('buffer should return an object with correct data for house.bmp.', (done) => {
    reader(`${__dirname}/../__test__/asset/house.bmp`, (err, data) => {
      let parsedData = parse(data);
      let result = new transforms(parsedData);
      expect(err).toBeNull();
      expect(result.type).toEqual('BM');
      expect(result.sizeInBytes).toEqual('66616');
      expect(result.pixelArrayOffset).toEqual('1078');
      expect(result.sizeOfHeader).toEqual('40');
      expect(result.widthInPixels).toEqual('256');
      expect(result.heightInPixels).toEqual('256');
      expect(result.colorPlanes).toEqual('1');
      expect(result.bitsPerPixel).toEqual('8');
      expect(result.compressionMethod).toEqual('0');
      expect(result.imageSize).toEqual('0');
      expect(result.horizontalResolution).toEqual('2834');
      expect(result.verticalResolution).toEqual('2834');
      expect(result.numColorsInColorPalette).toEqual('0');
      expect(result.numImportantColors).toEqual('0');
      done();
    });
  });
  test('buffer should return an object with correct data for finger.bmp.', (done) => {
    reader(`${__dirname}/../__test__/asset/finger.bmp`, (err, data) => {
      let parsedData = parse(data);
      let result = new transforms(parsedData);
      expect(result.type).toEqual('BM');
      expect(result.sizeInBytes).toEqual('66616');
      expect(result.pixelArrayOffset).toEqual('1078');
      expect(result.sizeOfHeader).toEqual('40');
      expect(result.widthInPixels).toEqual('256');
      expect(result.heightInPixels).toEqual('256');
      expect(result.colorPlanes).toEqual('1');
      expect(result.bitsPerPixel).toEqual('8');
      expect(result.compressionMethod).toEqual('0');
      expect(result.imageSize).toEqual('0');
      expect(result.horizontalResolution).toEqual('2834');
      expect(result.verticalResolution).toEqual('2834');
      expect(result.numColorsInColorPalette).toEqual('0');
      expect(result.numImportantColors).toEqual('0');
      done();
    });
  });
});
