
const arrNumber_1 = [1, 2, 2, 3, 4, 4, 5, 11, 2];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(arrNumber_1));

let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 17, 19];

function filterPrimes(arr) {
    const primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        let isPrime = true;

        if (n < 2) {
            isPrime = false;
    } else {
        for (let j = 2; j * j <= n; j++) {
            if (n % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        primeNumbers[primeNumbers.length] = n;
    }
}
return primeNumbers;
}

console.log(filterPrimes(arrNumber));

