/*
    This module sorts functions efficiently
    The time and spaace complexity are equal to:
    Best case: O(n)
    n: number of elemnts in list
*/







export const minMaxLog = (numbers: number[], step:number|undefined) => {
    /*
        This function returns an object list of 3 things:
        1. Min value in the list
        2. Max value in the list
        3. Min log in the list (Rounded down to integer)
    */
    let minValue = Infinity
    let maxValue = -Infinity
    let minLog: number = Infinity
    let currentLog= undefined;

    for (let number of numbers) {
        if (number < minValue) {
            minValue = number
        }
        if (number > maxValue) {
            maxValue = number
        }
        
        if(!step){
            if(number === 0 ) {continue}
            currentLog = Math.log(Math.abs(number))/Math.log(10)
            if (currentLog < minLog) {
                minLog = currentLog
            }
        }
    }

    
    if(minLog === Infinity) {minLog = 0}
    minLog = Math.floor(minLog)
    

    return { minValue, maxValue, minLog}
}


export const getStorageIndex = (number: number,min:number,step: number, ) => {
    return (number - min) / step;
};

const getValueFromStorageIndex = (index: number,min:number,step: number, ) => {
    return index * step + min;
}

const stepSort = (numbers: number[], _step: number| undefined) => {
    
    const {minValue,maxValue,minLog} = minMaxLog(numbers, _step)
    const step = Math.pow(10,minLog) + 1

    const sortedIndexes: number[] = new Array(1+(maxValue - minValue)/step);

    for (let number of numbers) {
        let storageIndex = getStorageIndex(number,minValue,step)
        if(!sortedIndexes[storageIndex]){
            sortedIndexes[storageIndex] = 1
        }
        else{
            sortedIndexes[getStorageIndex(number,minValue,step)]+=1
        }
    }
    
    console.log(sortedIndexes)
    
}

//export default stepSort;
