const matrix = 10;
const grid = [ //this will be provided by the server live
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
];

async function siteLoad() {
  host = document.getElementsByClassName("map")[0];
  for (let i = 0; i < matrix; i++) {
    for (let j = 0; j < matrix; j++) {
      cell = document.createElement("div");
      test = document.createElement("p");
      test.innerHTML = " ";
      cell.id = "cell" + i + j;
      cell.className = "cell";
      cell.appendChild(test);
      host.appendChild(cell);
    }
  }
  changeCells(grid);
}

async function changeCells(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == 1) {
        parkCell(i, j);
      }
    }
  }
}

function parkCell(i, j) {
  cell = document.getElementById("cell" + i + j);
  cell.className = "parkedCell";
}

document.onload(siteLoad());
