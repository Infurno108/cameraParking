const matrix = 10;

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
}

document.onload(siteLoad());
