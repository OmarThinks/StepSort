"use strict";
/*
    This module sorts functions efficiently
    The time and spaace complexity are equal to:
    Best case: O(n)
    n: number of elemnts in list
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStepArray = exports.getValueFromStorageIndex = exports.getStorageIndex = exports.minMaxLog = exports.getPrecision = void 0;
var getPrecision = function (number) {
    if (number === 0) {
        return 0;
    }
    var numberString = number.toString();
    if (numberString.includes(".")) {
        return -numberString.split(".")[1].length;
    }
    var precision = 0;
    while (number % 10 === 0) {
        //console.log(number % 1)
        number /= 10;
        precision++;
    }
    return precision;
};
exports.getPrecision = getPrecision;
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
    minValue = Math.min.apply(Math, numbers);
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (number > maxValue) {
            maxValue = number;
        }
        if (!step) {
            if (number === 0) {
                continue;
            }
            //currentLog = Math.log(Math.abs(number- minValue))/Math.log(10)
            if (number === minValue) {
                continue;
            }
            currentLog = (0, exports.getPrecision)(number - minValue);
            console.log("currentLog", currentLog, number, minValue);
            //if (currentLog < minLog) {
            //if (currentLog > minLog) {
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
var getStepArray = function (numbers, step) {
    console.log(1);
    if (numbers.length === 0) {
        return [];
    }
    if (typeof (step) !== "undefined") {
        if (step <= 0) {
            throw new Error("Step cannot be less than or equal to zero");
        }
    }
    console.log(2);
    var _a = (0, exports.minMaxLog)(numbers, step), minValue = _a.minValue, maxValue = _a.maxValue, minLog = _a.minLog;
    if (minValue === Infinity) {
        return [];
    } // the list is empty
    console.log(3);
    if (!step) {
        step = Math.pow(10, minLog);
    }
    // if step is not defined, then we set it to the 10^minLog
    console.log(4);
    console.log(minLog, "minLog");
    console.log(maxValue, minValue, step);
    console.log("maxValue: ".concat(maxValue, ", minValue: ").concat(minValue, ", step: ").concat(step, ", minLog: ").concat(minLog, " "));
    console.log("Array length: ", 1 + (maxValue - minValue) / step);
    var sortedIndexes = new Array((maxValue - minValue + 1) / step);
    for (var i = 0; i < numbers.length; i++) {
        //sortedIndexes[i] = 0
        var number = numbers[i];
        var storageIndex = (0, exports.getStorageIndex)(number, minValue, step);
        if (!sortedIndexes[storageIndex]) {
            sortedIndexes[storageIndex] = 1;
        }
        else {
            sortedIndexes[(0, exports.getStorageIndex)(number, minValue, step)] += 1;
        }
        //console.log(sortedIndexes)
    }
    /*
    for (let number of numbers) {
        let storageIndex = getStorageIndex(number,minValue,step)

        if(!sortedIndexes[storageIndex]){
            sortedIndexes[storageIndex] = 1
        }
        else{
            sortedIndexes[getStorageIndex(number,minValue,step)]+=1
        }
    }
    */
    //console.log(sortedIndexes)
    return sortedIndexes;
};
exports.getStepArray = getStepArray;
// getStepArray([1,2,3,4,20, 1, 1, 1])
var stepSort = function (numbers, step) {
    if (typeof (step) !== "undefined") {
        if (step <= 0) {
            throw new Error("Step cannot be less than or equal to zero");
        }
    }
    var _a = (0, exports.minMaxLog)(numbers, step), minValue = _a.minValue, maxValue = _a.maxValue, minLog = _a.minLog;
    if (!step) {
        step = Math.pow(10, minLog) + 1;
    }
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
    //console.log(sortedIndexes)
};
//export default stepSort;
