function insertionSort(arr) {
  primaryLoop: for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        arr[j - 1] = [arr[j], arr[j] = arr[j - 1]][0];
      } else {
        continue primaryLoop;
      }
    }
  }

  return arr;
}
let example = [6, 12, 7, 5, 1, 0, 9, 10]

console.log(insertionSort(example))