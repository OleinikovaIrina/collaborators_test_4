const arrNumber_1 = [1, 2, 2, 3, 4, 4, 5, 11, 2];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(arrNumber_1));
