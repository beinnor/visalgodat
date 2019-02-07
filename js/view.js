import { outputNode } from "/js/main.js";

// Print a an array in tableform
export function printOriginalArray(myArray) {
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

export function printStepArrayColor(myArray, swaps) {
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

export function printStepArrayNoColor(myArray) {
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

export function printFinalArray(myArray) {
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
