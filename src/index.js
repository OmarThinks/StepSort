/*
    This module sorts functions efficiently
    The time and spaace complexity are equal to:
    Best case: O(n)
    n: number of elemnts in list
*/
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}
var min_max_log = function (list_of_numbers) {
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
    for (var _i = 0, list_of_numbers_1 = list_of_numbers; _i < list_of_numbers_1.length; _i++) {
        var number = list_of_numbers_1[_i];
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
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, , 1, 2, 11, 33, 330, 7000];
console.log(min_max_log(a));
