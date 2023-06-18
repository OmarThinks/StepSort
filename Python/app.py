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
    numbers: List[Number], step: Optional[int] = None
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
