import {
  printStepArrayColor,
  printStepArrayNoColor,
  printOriginalArray,
  printFinalArray
} from "/js/view.js";

/**
 * Insertion sort iterates, consuming one input element each repetition,
 * and growing a sorted output list. Each iteration, insertion sort removes one
 * element from the input data, finds the location it belongs within the sorted
 * list, and inserts it there. It repeats until no input elements remain.
 *
 * This is the way most people would sort a deck of cards.
 *
 * WORST CASE:
 * O(n²). The array is in reverse order; we have to shift each of the n
 * elements n positions each time we make an insertion.
 *
 * BEST CASE:
 * Ω(n). The array is already perfectly sorted, and we simply keep moving the
 * line between "unsorted" and "sorted" as we examine each element.
 *
 *
 * PSEUDO CODE:
 *
 * - Call the first element of the array "sorted"
 * - Repeat until all elements are sorted:
 *  - Look at the next unsorted element. Insert into "sorted" portion by
 *    shifting the requisite number of elements.
 *
 * Sources: https://en.wikipedia.org/wiki/Insertion_sort,
 *          HarvardX: CS50 Introduction to Computer Science
 *
 * @param array     the array
 * @param arraySize size of the array
 */

export function insertionSort(array) {
  console.log("inital: " + array);

  for (let i = 0; i < array.length; i++) {
    let unsorted = array[i];
    let j = i;

    while (j > 0 && unsorted < array[j - 1]) {
      console.log(`swap ${array[j]} and ${array[j - 1]}`);
      printStepArrayColor(array, [j - 1, j]);
      array[j] = array[j - 1];
      j = j - 1;
      printStepArrayNoColor(array);
    }

    array[j] = unsorted;
  }

  console.log("final: " + array);
  printFinalArray(array);
  return array;
}
