# Step Sort

Efficient sorting algorithm.  
This sorting algorithm has a Time Complexity of **`O(n)`**, **only if used
within the limitation** that I will talk about in the end.

# How it works:

It works on **`4 Steps`**:

## Step 1: get (Min Value, Max Value, & Step):

<img src="./Images/Step1.png">

## Step 2: Generate Empty “Step Array”:

<img src="./Images/Step2.png">

## Step 3: Generate Empty “Step Array”:

<img src="./Images/Step2.png">

## Step 4: Unfold the “Step Array”:

<img src="./Images/Step2.png">

# The Limitation:

<img src="./Images/Limitation.png">

# Code:

- Code (Python): https://github.com/OmarThinks/StepSort/blob/master/Python/app.py
- Testing: https://github.com/OmarThinks/StepSort/blob/master/Python/test_app.py
- I also tried coding using JS and TS, but I stopped midway

## Custom Types:

- **`Number`**:
  - Code: `Number = Union[int, float]`
  - Explanation: a number, that can be Interger ot Float

# Function Parameters:

```python
def step_sort(
    numbers: List[Number],
    step: Optional[Number] = None,
    reversed: Optional[bool] = False,
    accuracy: Optional[int] = 12,
)
```

- **`numbers`**
  - Explanation: List of numbers to be sorted
  - Required: Yes
  - Type: `List[Number]`
  - Examples:
    - `[3, 6, 7, 4, 5, 6, 2]`
    - `[-1.1, 1.9, 5.7, 9, 5]`
- **`step`**
  - Explanation: The step between the numbers
  - Required: No
    - If not provided, it will be calculated.
    - But if provided it will save some calculation time
  - Type: `Number`
  - Condition:
    - `> 0`
  - Examples:
    - `1`
    - `0.1`
    - `100`
    - `2`
- **`reversed`**
  - Explanation:
    - If `True`: Order ascendingly
    - If `False`: Order descendingly
  - Required: No
  - Default Value: `False`
  - Type: `Boolean`
  - Examples:
    - `True`
    - `False`
- **`accuracy`**
  - Explanation:
    - This is NOT the step
    - This is the number of numbers after the floating point the be rounded at
    - Because divison is not very accurate in most programming langauges
  - Required: No
  - Default Value: `12`
  - Type: `Integer`
  - Examples:
    - `5`
    - `3`
