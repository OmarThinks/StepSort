//import { minMaxLog } from ".";
const { minMaxLog, getStorageIndex, getValueFromStorageIndex, getStepArray } = require('.');


const areListsEqual = (a: number[], b: number[]) => {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}



describe.only('minMaxLog', () => {

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



describe('getValueFromStorageIndex', () => {
  test('Normal', () => {
    expect(getValueFromStorageIndex(0, 0, 1)).toBeCloseTo(0); // Normal
    expect(getValueFromStorageIndex(5, 0, 1)).toBeCloseTo(5); // Positive
    expect(getValueFromStorageIndex(5, 1, 1)).toBeCloseTo(6); // Positive with start
    expect(getValueFromStorageIndex(5, -10, 1)).toBeCloseTo(-5); // negative
    expect(getValueFromStorageIndex(4, 5, 0.1)).toBeCloseTo(5.4); // decimal step
    expect(getValueFromStorageIndex(5, .1, 1)).toBeCloseTo(5.1); // decimal start
    expect(!0).toBe(true); // decimal start
    expect(!undefined).toBe(true); // decimal start
  });
})




describe('getStepArray', () => {
  test('Normal', () => {
    /*expect(getStepArray([0])).toEqual([1]); // Normal
    expect(areListsEqual(getStepArray([]), [])).toBe(true); // Empty list
    expect(getStepArray([0,0,0,0])).toEqual([4]); // Zeros
    expect(getStepArray([1,2,3,4,5])).toEqual([1,1,1,1,1]); // Positive Normal
    expect(getStepArray([1,1,2,2])).toEqual([2,2]); // Positive
    expect(getStepArray([1,1,0,3,3])).toEqual([1,2,undefined,2]); // Positive
    expect(getStepArray([-4,-4,2,5])).toEqual([2,undefined,undefined,undefined,undefined,undefined,1,undefined,undefined,1]); // negative*/
    expect(getStepArray([1.1, 1.4])).toEqual([1, undefined, undefined, 1]); // decimal step
    // [ ]: test minMaxLog for decimals, it always returns zero
    //expect(getValueFromStorageIndex(5, .1, 1)).toBeCloseTo(5.1); // decimal start
  });
})




