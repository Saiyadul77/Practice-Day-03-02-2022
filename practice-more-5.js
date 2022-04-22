/* const numbers = [5, 3, 8, -2, 4, -5, 10, 12, 36];

function positiveValue(num) {
    let positiveNumber = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveNumber.push(number);
        }
        else {
            break;
        }
    }
    return positiveNumber;
}
const positive = positiveValue(numbers);
console.log(positive); */

/* const values = [5, 6, 8, 9, 10, 30, 89, 55, 40, -2, -3, -8, -9, 5, 4, -10];
function positiveNumberValue(value) {
    let positiveSign = [];
    for (const element of value) {
        if (element >= 0) {
            positiveSign.push(element);
        }
        else {
            break;
        }
    }
    return positiveSign;
}
const positiveNumberStatus = positiveNumberValue(values);
console.log(positiveNumberStatus); */

const values = [2, 3, 5, 6, 8, -8, -9, -6, 5];
let positive = [];
for (let i = 0; i < values.length; i++) {
    const element = values[i];
    if (element >= 0) {
        console.log(element);
    }
    else {
        break;
    }
}
