from typing import Union, Optional

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


"""
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

    minValue = Math.min(...numbers)



    for (let number of numbers) {
        if (number > maxValue) {
            maxValue = number
        }
        
        if(!step){
            if(number === 0 ) {continue}
            //currentLog = Math.log(Math.abs(number- minValue))/Math.log(10)
            if(number === minValue){continue}
            currentLog = getPrecision(number- minValue)
            //console.log("currentLog", currentLog, number, minValue)
            //if (currentLog < minLog) {
            //if (currentLog > minLog) {
            if (currentLog < minLog) {
                minLog = currentLog
            }
        }
    }

    
    if(minLog === Infinity) {minLog = 0}
    minLog = Math.floor(minLog)
    

    return { minValue, maxValue, minLog}
}
"""


def get_min_max_log(numbers: Union[int, float], step: Optional[int] = 1):
    pass
