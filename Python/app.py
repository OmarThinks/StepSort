from typing import Union, Optional, Tuple, Sequence, List
import math
from decimal import Decimal

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
    numbers: List[Number], step: Optional[Number] = None, accuracy: Optional[int] = 12
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
            currentLog = get_precision(round(number - minValue, 12))
            # print("currentLog", currentLog, number, minValue)
            if currentLog < minLog:
                minLog = currentLog

    if minLog == math.inf:
        minLog = 0
    minLog = int(minLog)

    return (minValue, maxValue, int(minLog))


def get_storage_index(number: Number, minValue: Number, step: Number):
    return int(round((number - minValue) / step, 10))


def get_value_from_storage_index(index: Number, minValue: Number, step: Number):
    return index * step + minValue


def get_step_array(
    numbers: List[Number], step: Optional[Number] = None, accuracy: Optional[int] = 12
) -> List[int]:
    if len(numbers) == 0:
        return []

    if step:
        if step <= 0:
            raise Exception("Step cannot be less than or equal to zero")

    (minValue, maxValue, minLog) = get_min_max_log(numbers, step, accuracy)

    if minValue == math.inf:
        return []  # I don't think that this will happen

    if not step:
        step = math.pow(10, get_precision(minValue))

    # print(minValue, maxValue, minLog)
    # print(step)

    array_length = int(round(1 + ((maxValue - minValue) / step), 10))

    # print("array_length: ", array_length)

    sortedIndexes: List[int] = [0 for x in range(array_length)]

    # print(sortedIndexes)

    for number in numbers:
        storageIndex = get_storage_index(number, minValue, step)

        if not sortedIndexes[storageIndex]:
            sortedIndexes[storageIndex] = 1
        else:
            sortedIndexes[storageIndex] += 1

    return sortedIndexes
