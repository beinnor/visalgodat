import {
  printStepArrayColor,
  printStepArrayNoColor,
  printOriginalArray,
  printFinalArray
} from "/js/view.js";

/**
 * Selection sort
 * In selection sort, the idea of the algorithm is to find the smallest
 * unsorted element and add it to the end of the sorted list.
 *
 * WORST CASE:
 *  O(n²). We must iterate over each of the n elements of the array (to find
 *  the smallest unsorted element) and we must repeat this process n times,
 *  since only one element gets sorted on each pass.
 *
 * BEST CASE:
 *  Ω(n²). Exactly the same.
 *  There is no way to guarantee the array is sorted until
 *  we go through this process for all the elements.
 *
 * PSEUDO CODE:
 * - Repeat until no unsorted elements remain:
 *   - Search the unsorted part of the data to find the smallest value
 *   - Swap the smallest found value with the first element
 *     of the unsorted part.
 *
 *
 * @param array     the array
 * @param arraySize size of the array
 */
export function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }

    // swapValues(array, i, min);

    console.log(`swap ${i} and ${min}`);
    printStepArrayColor(array, [i, min]);
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
    printStepArrayNoColor(array);
  }

  printFinalArray(array);
}
