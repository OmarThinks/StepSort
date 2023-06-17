/*
    This module sorts functions efficiently
    The time and spaace complexity are equal to:
    Best case: O(n)
    n: number of elemnts in list
*/




function getBaseLog(x:number, y:number) {
    return Math.log(y) / Math.log(x);
  }



const minMaxLog = (numbers: number[]) => {
    /*
        This function returns an object list of 3 things:
        1. Min value in the list
        2. Max value in the list
        3. Min log in the list (Rounded down to integer)
    */
    let minValue = Infinity
    let maxValue = -Infinity
    let minLog = Infinity
    let currentLog;

    for (let number of numbers) {
        if (number < minValue) {
            minValue = number
        }
        if (number > maxValue) {
            maxValue = number
        }
        currentLog = Math.log(number)/Math.log(10)
        if (currentLog < minLog) {
            minLog = currentLog
        }
    }

    minLog = Math.floor(minLog)

    return { minValue, maxValue, minLog}
}





const a :number[]= [1,2,3,4,5,6,7,8,9,1,2,11,33,330,7000] ;

console.log(minMaxLog(a))

// step = minLog^10 + 1

const getStorageIndex = (number: number,min:number,step: number, ) => {
    return (number - min) / step;
};

const getValueFromStorageIndex = (index: number,min:number,step: number, ) => {
    return index * step + min;
}




const decimalSort(sumbers: number[]) => {}
