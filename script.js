function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
      return array[i];
  }
}

console.log(bubbleSort([10, 5, 2, 3, 1, 8, 9, 7, 6]));
