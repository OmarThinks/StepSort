def get_precision(number):
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
