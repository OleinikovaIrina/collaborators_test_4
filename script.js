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
 

