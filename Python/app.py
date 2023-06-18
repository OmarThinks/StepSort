from typing import Union, Optional, Tuple, Sequence, List
import math

Number = Union[int, float]


def get_precision(number: Number) -> int:
    """
    This function gets the precision
    1,2,3,4,0: 0
    0.1,-0.1: -1

    100, -100: 2
    """
    if number == 0:
        return 0
    number_string = str(number)
    if "." in number_string:
        return -len(number_string.split(".")[1])
    precision = 0
    while number % 10 == 0:
        number /= 10
        precision += 1
    return precision


def get_min_max_log(
    numbers: List[Number], step: Optional[Number] = None
) -> Tuple[Number, Number, int]:
    """
    This function returns an object list of 3 things:
    1. Min value in the list
    2. Max value in the list
    3. Min log in the list (Rounded down to integer)
    """

    minValue: Number = math.inf
    maxValue: Number = -math.inf
    minLog: float = math.inf
    currentLog = None

    minValue = min(numbers)

    for number in numbers:
        if number > maxValue:
            maxValue = number

        if not step:
            if number == 0:
                continue
            if number == minValue:
                continue
            currentLog = get_precision(number - minValue)
            # print("currentLog", currentLog, number, minValue)
            if currentLog < minLog:
                minLog = currentLog

    if minLog == math.inf:
        minLog = 0
    minLog = int(minLog)

    return (minValue, maxValue, int(minLog))


def get_storage_index(number: Number, minValue: Number, step: Number):
    return math.floor((number - minValue) / step)


def get_value_from_storage_index(index: Number, minValue: Number, step: Number):
    return index * step + minValue


"""
export const getStepArray = (numbers: number[], step?: number| undefined) => {
    console.log(1)

    if(numbers.length === 0){return []}
    
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
    return sortedIndexes
}
"""


def get_step_array(numbers: List[Number], step: Optional[Number] = None) -> List[int]:
    if len(numbers) == 0:
        return []

    if step:
        if step <= 0:
            raise Exception("Step cannot be less than or equal to zero")

    (minValue, maxValue, minLog) = get_min_max_log(numbers, step)

    if minValue == math.inf:
        return []  # I don't think that this will happen

    if not step:
        step = math.pow(10, get_precision(minValue))

    array_length = int(1 + ((maxValue - minValue) / step))

    sortedIndexes: List[int] = [0 for x in range(array_length)]

    for number in numbers:
        storageIndex = get_storage_index(number, minValue, step)

        if not sortedIndexes[storageIndex]:
            sortedIndexes[storageIndex] = 1
        else:
            sortedIndexes[storageIndex] += 1

    return sortedIndexes
