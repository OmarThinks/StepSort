/*
    This module sorts functions efficiently
    The time and spaace complexity are equal to:
    Best case: O(n)
    n: number of elemnts in list




    
*/


const min_max_log = (list_of_numbers: number[]) => {
    /*
        This function returns an object list of 3 things:
        1. Min value in the list
        2. Max value in the list
        3. Min log in the list (Rounded down to integer)
    */
    let min_value = Infinity
    let max_value = -Infinity
    let min_log = Infinity

    for (let number of list_of_numbers) {
        if (number < min_value) {
            min_value = number
        }
        if (number > max_value) {
            max_value = number
        }
        if (Math.log10(number) < min_log) {
            min_log = number
        }
    }

    min_log = Math.floor(min_log)

    return {min_value, max_value, min_log}
}





