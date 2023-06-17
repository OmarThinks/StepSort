//import { minMaxLog } from ".";
const { minMaxLog } = require('.');


test('First Test', () => {
    expect(minMaxLog([0,1,2,3,4,5,6,7,8,9])).toStrictEqual({ minValue:0, maxValue:9, minLog:0});
  });


