import { bubbleSort, selectionSort } from "/js/algorithms.js";
import {
  printStepArrayColor,
  printStepArrayNoColor,
  printOriginalArray,
  printFinalArray
} from "/js/view.js";

// Globals
export const outputNode = document.getElementById("output");
let originalArray;

// Button
const newArrayBtn = document.getElementById("newArrayBtn");
// Selectionsort Button
const selectionSortBtn = document.getElementById("startSelectionSortBtn");
selectionSortBtn.addEventListener("click", () => {
  // dont do anything if an array isn't set
  if (originalArray) {
    selectionSort(originalArray);
  }
});

// Bubblesort Button
const bubbleSortBtn = document.getElementById("startBubbleSortBtn");
bubbleSortBtn.addEventListener("click", () => {
  // dont do anything if an array isn't set
  if (originalArray) {
    bubbleSort(originalArray);
  }
});

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
