"use strict";
/*
    This module sorts functions efficiently
    The time and spaace complexity are equal to:
    Best case: O(n)
    n: number of elemnts in list
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueFromStorageIndex = exports.getStorageIndex = exports.minMaxLog = void 0;
var minMaxLog = function (numbers, step) {
    /*
        This function returns an object list of 3 things:
        1. Min value in the list
        2. Max value in the list
        3. Min log in the list (Rounded down to integer)
    */
    var minValue = Infinity;
    var maxValue = -Infinity;
    var minLog = Infinity;
    var currentLog = undefined;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (number < minValue) {
            minValue = number;
        }
        if (number > maxValue) {
            maxValue = number;
        }
        if (!step) {
            if (number === 0) {
                continue;
            }
            currentLog = Math.log(Math.abs(number)) / Math.log(10);
            if (currentLog < minLog) {
                minLog = currentLog;
            }
        }
    }
    if (minLog === Infinity) {
        minLog = 0;
    }
    minLog = Math.floor(minLog);
    return { minValue: minValue, maxValue: maxValue, minLog: minLog };
};
exports.minMaxLog = minMaxLog;
var getStorageIndex = function (number, min, step) {
    return Math.floor((number - min) / step);
};
exports.getStorageIndex = getStorageIndex;
var getValueFromStorageIndex = function (index, min, step) {
    return index * step + min;
};
exports.getValueFromStorageIndex = getValueFromStorageIndex;
var stepSort = function (numbers, _step) {
    if (typeof (_step) !== "undefined") {
        if (_step <= 0) {
            throw new Error("Step cannot be less than or equal to zero");
        }
    }
    var _a = (0, exports.minMaxLog)(numbers, _step), minValue = _a.minValue, maxValue = _a.maxValue, minLog = _a.minLog;
    var step = Math.pow(10, minLog) + 1;
    var sortedIndexes = new Array(1 + (maxValue - minValue) / step);
    for (var _i = 0, numbers_2 = numbers; _i < numbers_2.length; _i++) {
        var number = numbers_2[_i];
        var storageIndex = (0, exports.getStorageIndex)(number, minValue, step);
        if (!sortedIndexes[storageIndex]) {
            sortedIndexes[storageIndex] = 1;
        }
        else {
            sortedIndexes[(0, exports.getStorageIndex)(number, minValue, step)] += 1;
        }
    }
    console.log(sortedIndexes);
};
//export default stepSort;
