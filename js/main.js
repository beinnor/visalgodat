// Globals
const outputNode = document.getElementById("output");
let originalArray;

// Button
const newArrayBtn = document.getElementById("newArrayBtn");

newArrayBtn.addEventListener("click", () => {
  clear();
  originalArray = randomArray(10, 0, 9);
  printOriginalArray(originalArray);
});

// Clear outputbutton
const clearOutputBtn = document.getElementById("clearoutput");
clearOutputBtn.addEventListener("click", () => {
  clear();
});

// clear
function clear() {
  outputNode.innerHTML = "";
}

// Make a random array
function randomArray(arraySize, minValue, maxValue) {
  return new Array(arraySize).fill(0).map(function(n) {
    return Math.floor(Math.random() * maxValue) + minValue;
  });
}

// Print a an array in tableform
function printOriginalArray(myArray) {
  let div = document.createElement("div");
  div.className = "originalTable";

  let table = document.createElement("table");
  let tr = document.createElement("tr");

  for (let i = 0; i < myArray.length; i++) {
    let td = document.createElement("td");
    td.innerHTML = myArray[i];
    tr.appendChild(td);
  }

  table.appendChild(tr);
  div.appendChild(table);
  outputNode.appendChild(div);
  outputNode.appendChild(document.createElement("hr"));
}

function printStepArrayColor(myArray, swaps) {
  let div = document.createElement("div");
  div.className = "stepTable";

  let table = document.createElement("table");
  let tr = document.createElement("tr");

  for (let i = 0; i < myArray.length; i++) {
    let td = document.createElement("td");
    td.innerHTML = myArray[i];
    if (i === swaps[0]) {
      td.style.background = "green";
    } else if (i === swaps[1]) {
      td.style.background = "pink";
    }
    tr.appendChild(td);
  }

  let infoText = document.createElement("p");
  infoText.className = "infoText";
  infoText.innerText = `swap index ${swaps[0]} and index ${swaps[1]}`;

  table.appendChild(tr);
  div.appendChild(table);
  div.appendChild(infoText);
  outputNode.appendChild(div);
}

function printStepArrayNoColor(myArray) {
  let div = document.createElement("div");
  div.className = "stepTable";

  let table = document.createElement("table");
  let tr = document.createElement("tr");

  for (let i = 0; i < myArray.length; i++) {
    let td = document.createElement("td");
    td.innerHTML = myArray[i];
    tr.appendChild(td);
  }

  table.appendChild(tr);
  div.appendChild(table);
  outputNode.appendChild(div);
}

function printFinalArray(myArray) {
  let div = document.createElement("div");
  div.className = "finalTable";

  let table = document.createElement("table");
  let tr = document.createElement("tr");

  for (let i = 0; i < myArray.length; i++) {
    let td = document.createElement("td");
    td.innerHTML = myArray[i];
    tr.appendChild(td);
  }

  outputNode.appendChild(document.createElement("hr"));
  table.appendChild(tr);
  div.appendChild(table);
  outputNode.appendChild(div);
}

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
 *
 * @param array     array
 * @param arraySize size of array
 */
function bubbleSort(array) {
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
  originalArray = null;
}

// Bubblesort Button
const bubbleSortBtn = document.getElementById("startBubbleSortBtn");
bubbleSortBtn.addEventListener("click", () => {
  // dont do anything if an array isn't set
  if (originalArray) {
    bubbleSort(originalArray);
  }
});

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
function selectionSort(array) {
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
  originalArray = null;
}

// Selectionsort Button
const selectionSortBtn = document.getElementById("startSelectionSortBtn");
selectionSortBtn.addEventListener("click", () => {
  // dont do anything if an array isn't set
  if (originalArray) {
    selectionSort(originalArray);
  }
});
