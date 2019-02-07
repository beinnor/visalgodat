import { selectionSort } from "/js/selectionSort.js";
import { bubbleSort } from "/js/bubbleSort.js";
import { insertionSort } from "/js/insertionSort.js";
import {
  printStepArrayColor,
  printStepArrayNoColor,
  printOriginalArray,
  printFinalArray
} from "/js/view.js";

// Globals
export const outputNode = document.getElementById("output");
let originalArray;

// ---------------- Buttons ----------------------

// new array button
const newArrayBtn = document.getElementById("newArrayBtn");
newArrayBtn.addEventListener("click", () => {
  clear();
  originalArray = randomArray(10, 0, 9);
  printOriginalArray(originalArray);
});

// Selectionsort Button
const selectionSortBtn = document.getElementById("startSelectionSortBtn");
selectionSortBtn.addEventListener("click", () => {
  // dont do anything if an array isn't set
  if (originalArray) {
    selectionSort(originalArray);
    originalArray = "";
  }
});

// Bubblesort Button
const bubbleSortBtn = document.getElementById("startBubbleSortBtn");
bubbleSortBtn.addEventListener("click", () => {
  // dont do anything if an array isn't set
  if (originalArray) {
    bubbleSort(originalArray);
    originalArray = "";
  }
});

// Insertionsort Button
const insertionSortBtn = document.getElementById("startInsertionSortBtn");
insertionSortBtn.addEventListener("click", () => {
  // dont do anything if an array isn't set
  if (originalArray) {
    insertionSort(originalArray);
    originalArray = "";
  }
});

// Quicksort Button
const quickSortBtn = document.getElementById("startQuickSortBtn");
quickSortBtn.addEventListener("click", () => {
  alert("button is not working yet");
  // dont do anything if an array isn't set
  if (originalArray) {
    //quickSort(originalArray);
    //originalArray = "";
  }
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
