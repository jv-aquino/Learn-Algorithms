function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
      }
    }
  }
  return arr;
}
let example = [6, 12, 7, 5, 1, 0, 9, 10]

console.log(bubbleSort(example))