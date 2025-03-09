function groupByParity(arr) {
    return {
        even: arr.filter(num => num % 2 === 0),
        odd: arr.filter(num => num % 2 !== 0)
 
    };
} 
groupByParity([1, 2, 3, 4, 5, 6]);

console.log(groupByParity([1, 2, 3, 4, 5, 6]))

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

let arrNumber2 = [1, 2, 3, 2, 5, 3, 2, 4, 3, 5, 4, 7, 8];

function mostFrequent(arr) {
    let freqMap = new Map();
    let maxFreq = 0;
    let mostFreqElement;

    for (let num of arr) {
        let count = freqMap.has(num) ? freqMap.get(num) + 1 : 1;
        freqMap.set(num, count);

        if (count > maxFreq) {
            maxFreq = count;
            mostFreqElement = num;
        }
    }
    return mostFreqElement;
 }

 console.log(mostFrequent(arrNumber2));
 