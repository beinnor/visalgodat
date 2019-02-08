import {
  printStepArrayColor,
  printStepArrayNoColor,
  printOriginalArray,
  printFinalArray
} from "./view.js";

/**
 * Bubble sort.
 * This is a simple sorting algorithm. The idea is to move higher valued
 * elements generally towards the right and lower valued elements generally to
 * the left.
 *
 * Even though the algorithm is simple, it is slow and impractical for most
 * problems even when compared to insertion sort. It is mostly useful for
 * educational purposes.
 *
 * WORST CASE:
 *  O(n²). The array is in reverse order; we have to "bubble" each of the
 *  n elements all the way across the array, and since we can only fully bubble
 *  one element into position per pass, we must do this n times.
 *
 * BEST CASE:
 *  Ω(n). The array is already sorted and we make no swaps at the first pass.
 *
 *
 * PSEUDO CODE:
 *  - Set swap counter to a non-zero value
 *  - Repeat until swap counter is zero
 *    - Reset swap counter to 0
 *    - Look at each adjacent pair
 *      - If two adjacent pairs is not in order, swap them and
 *        add one to the swap counter.
 *
 */
export function bubbleSort(array) {
  let swapCounter = -1;

  while (swapCounter != 0) {
    swapCounter = 0;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        console.log(`swap ${i} and ${i + 1}`);
        printStepArrayColor(array, [i, i + 1]);
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        printStepArrayNoColor(array);
        swapCounter++;
      }
    }
  }

  printFinalArray(array);
}
