const numbers = [30, 40, 25, 90, 60, 125, 75, 85, 62, 42, 40, 30, 16, 99, 89, 79, 70, 95, 100];
/* let biggestNumber = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 80) {
        biggestNumber = element;
        console.log(biggestNumber);
    }
} */
function biggestNumber(ages) {
    let bigerNumber = '';
    for (const element of ages) {
        if (element > 80) {
            bigerNumber = element;
            console.log(bigerNumber);
        }
    }

}
const biggestStatus = biggestNumber(numbers)
// console.log(biggestStatus);