/*
    This module sorts functions efficiently
    The time and spaace complexity are equal to:
    Best case: O(n)
    n: number of elemnts in list
*/
var minMaxLog = function (numbers) {
    /*
        This function returns an object list of 3 things:
        1. Min value in the list
        2. Max value in the list
        3. Min log in the list (Rounded down to integer)
    */
    var minValue = Infinity;
    var maxValue = -Infinity;
    var minLog = Infinity;
    var currentLog;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (number < minValue) {
            minValue = number;
        }
        if (number > maxValue) {
            maxValue = number;
        }
        currentLog = Math.log(number) / Math.log(10);
        if (currentLog < minLog) {
            minLog = currentLog;
        }
    }
    minLog = Math.floor(minLog);
    return { minValue: minValue, maxValue: maxValue, minLog: minLog };
};
var a = [1, 1, 1, 2];
console.log(minMaxLog(a));
var getStorageIndex = function (number, min, step) {
    return (number - min) / step;
};
var getValueFromStorageIndex = function (index, min, step) {
    return index * step + min;
};
var decimalSort = function (numbers) {
    var _a = minMaxLog(numbers), minValue = _a.minValue, maxValue = _a.maxValue, minLog = _a.minLog;
    var step = Math.pow(10, minLog) + 1;
    var sortedIndexes = new Array(1 + (maxValue - minValue) / step);
    for (var _i = 0, numbers_2 = numbers; _i < numbers_2.length; _i++) {
        var number = numbers_2[_i];
        var storageIndex = getStorageIndex(number, minValue, step);
        if (!sortedIndexes[storageIndex]) {
            sortedIndexes[storageIndex] = 1;
        }
        else {
            sortedIndexes[getStorageIndex(number, minValue, step)] += 1;
        }
    }
    console.log(sortedIndexes);
};
decimalSort(a);
