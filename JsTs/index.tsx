/*
    This module sorts functions efficiently
    The time and spaace complexity are equal to:
    Best case: O(n)
    n: number of elemnts in list
*/






export const getPrecision =(number: number) =>{
    /*
    let precision = 0;
    while(number % 1 !== 0){
        number *= 10;
        precision++;
    }
    return precision
    */

    if(number === 0 ){return 0}

    let numberString = number.toString()
    if(numberString.includes(".")){
        return -numberString.split(".")[1].length
    }
    let precision = 0;


    while(number % 10 === 0){
        console.log(number % 1)
        number /= 10;
        precision++;
    }
    
    return precision
}



export const minMaxLog = (numbers: number[], step?:number|undefined) => {
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
    return Math.floor((number - min) / step);
};

export const getValueFromStorageIndex = (index: number,min:number,step: number, ) => {
    return index * step + min;
}



export const getStepArray = (numbers: number[], step?: number| undefined) => {
    console.log(1)
    if(typeof(step)!=="undefined"){
        if(step<=0){
            throw new Error("Step cannot be less than or equal to zero")
        }
    }
    console.log(2)


    
    const {minValue,maxValue,minLog} = minMaxLog(numbers, step)
    if(minValue === Infinity) {return []} // the list is empty


    console.log(3)


    if(!step) {step = Math.pow(10,minLog)} 
    // if step is not defined, then we set it to the 10^minLog
    console.log(4)


    console.log(minLog, "minLog")
    console.log(maxValue, minValue, step )
    console.log(`maxValue: ${maxValue}, minValue: ${minValue}, step: ${step}, minLog: ${minLog} `)
    console.log("Array length: ", 1+(maxValue - minValue)/step)


    const sortedIndexes: number[] = new Array((maxValue - minValue+1)/step);


    for(let i = 0; i < numbers.length; i++){
        //sortedIndexes[i] = 0
        
        let number = numbers[i]

        let storageIndex = getStorageIndex(number,minValue,step)

        if(!sortedIndexes[storageIndex]){
            sortedIndexes[storageIndex] = 1
        }
        else{
            sortedIndexes[getStorageIndex(number,minValue,step)]+=1
        }

        console.log(sortedIndexes)

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
    return sortedIndexes
}




// getStepArray([1,2,3,4,20, 1, 1, 1])

const stepSort = (numbers: number[], step?: number| undefined) => {

    if(typeof(step)!=="undefined"){
        if(step<=0){
            throw new Error("Step cannot be less than or equal to zero")
        }
    }


    
    const {minValue,maxValue,minLog} = minMaxLog(numbers, step)

    if(!step) {step = Math.pow(10,minLog) + 1}




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
