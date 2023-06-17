//import { minMaxLog } from ".";
const { minMaxLog, getStorageIndex } = require('.');


describe('minMaxLog', () => {

  test('Normal', () => {
      expect(minMaxLog([0,1,2,3,4,5,6,7,8,9])).toStrictEqual({ minValue:0, maxValue:9, minLog:0});
  });

  test('Negatives', () => {
    expect(minMaxLog([0,-1,-2,-3,-4,-5,-6,-7,-8,-9])).toStrictEqual({ minValue:-9, maxValue:0, minLog:0});
  });

  test('zeros', () => {
    expect(minMaxLog([0,0,0,0,0,0,0,-0])).toStrictEqual({ minValue:0, maxValue:0, minLog:0});
  });

  test('Normal With Hundreds', () => {
    expect(minMaxLog([0,100,2,3,4,500,6,7,800,9])).toStrictEqual({ minValue:0, maxValue:800, minLog:0});
  });

  test('Negatives With Hundreds', () => {
    expect(minMaxLog([0,-100,-2,-3,-4,-500,-6,-7,-800,-9])).toStrictEqual({ minValue:-800, maxValue:0, minLog:0});
  });

  test('Only Hundreds', () => {
    expect(minMaxLog([0,100,200,300,400,500,600,700,800,900])).toStrictEqual({ minValue:0, maxValue:900, minLog:2});
  });

  test('Only Negatives Hundreds', () => {
    expect(minMaxLog([0,-100,-200,-300,-400,-500,-600,-700,-800,-900])).toStrictEqual({ minValue:-900, maxValue:0, minLog:2});
  });


  test('Step is provided', () => {
    expect(minMaxLog([0,1,2,3,4,5,6,7,8,9], 1)).toStrictEqual({ minValue:0, maxValue:9, minLog:0});
  });

})


describe('getStorageIndex', () => {

  test('Normal', () => {
    expect(getStorageIndex(0, 0, 1)).toStrictEqual(0); // Normal
    expect(getStorageIndex(5, 0, 1)).toStrictEqual(5); // Positive
    expect(getStorageIndex(5, 1, 1)).toStrictEqual(4); // Positive with start
    expect(getStorageIndex(-5, -10, 1)).toStrictEqual(5); // negative
    expect(getStorageIndex(1, 0, 0.1)).toStrictEqual(10); // decimal
    expect(getStorageIndex(4.5, 0, 1)).toStrictEqual(4); // approxmity

  });

})