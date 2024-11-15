/* Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }

    let positiveNumbers = 0;
    let negativeSum = 0;

    for (let i = 0; i < input.length; i++) { 
        if (input[i] > 0) {
            positiveNumbers += 1;
        } else if (input[i] < 0) {
            negativeSum += input[i];
        }
    }
    return [positiveNumbers, negativeSum]
}

const sumAndCount1 = (arrayOfIntegers) => {
    const countOfPositives = arrayOfIntegers.filter((number) => number > 0).length;
    const sumOfNegatives = arrayOfIntegers.filter((number) => number < 0).reduce((acc, number) => acc + number, 0);
    /* Here, 0 is the initial value of the accumulator. If the array is empty, the function will return 0. */
    return [countOfPositives, sumOfNegatives];
}

function sumAndCount2(arrayOfIntegers) {
    if (arrayOfIntegers === null || arrayOfIntegers.lenght === 0) {
        return [];
    } else {
        let countOfPositives = 0;
        let sumOfnegatives = 0;
        arrayOfIntegers.forEach((number) => {
            if (number > 0) {
                countOfPositives++;
            } else if (number < 0) {
                sumOfnegatives += number;
            }
        });
        return [countOfPositives, sumOfnegatives];
    }
}

function sumAndCount3(arrayOfIntegers) {
    if (arrayOfIntegers === null || arrayOfIntegers.lenght === 0) {
        return [];
    } else {
        let countOfPositives = 0;
        let sumOfnegatives = 0;
        for (let integer of arrayOfIntegers) {
            if (integer > 0) {
                countOfPositives++;
            } else {
                sumOfnegatives += integer;
            }
        }
        return [countOfPositives, sumOfnegatives];
    }
}