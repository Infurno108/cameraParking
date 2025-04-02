const matrix = 10;

async function siteLoad() {
  host = document.getElementsByClassName("map")[0];
  for (let i = 0; i < matrix; i++) {
    var row = document.createElement("div");
    row.className = "row";
    row.id = "row" + i;
    host.appendChild(row);
    for (let j = 0; j < matrix; j++) {
      var cell = document.createElement("div");
      var text = document.createElement("p");
      text.innerHTML = "0";
      cell.className = "cell";
      cell.id = "cell" + i + j;
      row.appendChild;
    }
  }
}

document.onload(siteLoad());
