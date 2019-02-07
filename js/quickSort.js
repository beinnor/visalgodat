function quickSort(array) {
  recursiveSort(array, 0, array.length - 1);
}

function recursiveSort(array, start, end) {
  // If only one element, the array is sorted
  if (end <= start) {
    return;
  }

  let leftArrayEnd = partition(array, start, end);

  recursiveSort(array, 0, leftArrayEnd);
  recursiveSort(array, leftArrayEnd + 1, end);
}

/*
 * Partitions the array such that all elements to the left of
 * pivot point (high) is less than pivot point, and all elements to
 * the right are higher than pivot point.
 *
 * In this algorithm the pivot point is
 * the last element of the array, and is moved to correct position
 * after sorting is done.
 */
function partition(array, low, high) {
  // Index where last swap was done.
  let swapIndex = low - 1;

  for (; low < high; low++) {
    if (array[low] <= array[high]) {
      swapIndex++;
      swap(array, swapIndex, low);
    }
  }
  swap(array, swapIndex + 1, low); // put pivot at its correct position
  return swapIndex; // this is now the last index of left array.
}

/*
 * Swaps indexes a and b in array arr
 */
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
