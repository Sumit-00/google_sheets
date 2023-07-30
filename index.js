
const rows = 100;
const cols = 26;


const addressColCount = document.querySelector(".address-col-cont");
const addressRowCount = document.querySelector(".address-row-count");
const cellsCount = document.querySelector(".cells-count");
const addressBar = document.querySelector(".address-bar");

for (let i = 0; i < rows; i++) {
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class", "address-col");
    addressCol.innerText = i + 1;
    addressColCount.appendChild(addressCol);
}

for (let i = 0; i < cols; i++) {
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class", "address-row");
    addressRow.innerText = String.fromCharCode(65 + i)
    addressRowCount.appendChild(addressRow);
}

for(let i = 0; i < rows; i++) {
    let rowCont = document.createElement("div");
    rowCont.setAttribute("class", "row-cont");
    for(let j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("contenteditable", "true");
        rowCont.appendChild(cell);
        addEventListener(cell, i , j)
    }
    cellsCount.appendChild(rowCont);
}

function addEventListener(cell, i , j) {
    cell.addEventListener("click", () => {
        const col = String.fromCharCode(65 + j);
        const row = i + 1;
        addressBar.value = `${col}${row}`
    })
}