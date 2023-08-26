
const rows = 100;
const cols = 26;

let sheetDB = [];

for(let i = 0; i < rows; i++) {
    const sheetRow = [];

    for(let j = 0; j < cols; j++) {
        const cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontSize: "14px",
            fontFamily: "monospace",
            fontColor: "#000000",
            bgColor: "#000000",
        }
        sheetRow.push(cellProp);
    }

    sheetDB.push(sheetRow);
}


let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underlined");
let fontSize = document.querySelector(".font-size-prop");
let fontFamily = document.querySelector(".font-family-prop");
let bgColor = document.querySelector(".BGcolor-prop");
let fontColor = document.querySelector(".font-color-prop");
let alignment = document.querySelectorAll(".alignment");
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];


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
        cell.setAttribute("rid", i);
        cell.setAttribute("cid", j);
        rowCont.appendChild(cell);
        addEventListenerForAddressBarDisplay(cell, i , j)
    }
    cellsCount.appendChild(rowCont);
}

function addEventListenerForAddressBarDisplay(cell, i , j) {
    cell.addEventListener("click", () => {
        const col = String.fromCharCode(65 + j);
        const row = i + 1;
        addressBar.value = `${col}${row}`
        checkForTheAppliedProperties(i, j)
    })
}

function checkForTheAppliedProperties(rowID, colID) {
    const cellProp = sheetDB[rowID][colID];

    checkForDefaultStyling(cellProp, bold, "bold");
    checkForDefaultStyling(cellProp, italic, "italic");
    checkForDefaultStyling(cellProp, underline, "underline");
    checkForDefaultStyling(cellProp, fontFamily, "underline");
    checkForAlighmentStyling(cellProp, leftAlign, "alignment", "left");
    checkForAlighmentStyling(cellProp, centerAlign, "alignment", "center");
    checkForAlighmentStyling(cellProp, rightAlign, "alignment", "right");
    checkForFontStyle(fontFamily, cellProp, "fontFamily");
    checkForFontStyle(fontSize, cellProp, "fontSize");
    checkForFontStyle(fontColor, cellProp, "color");
    checkForFontStyle(bgColor, cellProp, "bgColor");
    
}

function checkForDefaultStyling(cellProp, propertyEle, style) {
    if(cellProp[style]) {
        propertyEle.classList.add("active-cell-prop")
    }else if(propertyEle.classList.contains("active-cell-prop") && !cellProp[style]){
        propertyEle.classList.remove("active-cell-prop")
    }
}

function checkForAlighmentStyling(cellProp, propertyEle, style){
    if(cellProp[style] === "left") {
        propertyEle.classList.add("active-cell-prop")
        centerAlign.classList.remove("active-cell-prop");
        rightAlign.classList.remove("active-cell-prop");
    }else if(cellProp[style] === "center") {
        propertyEle.classList.add("active-cell-prop")
        leftAlign.classList.remove("active-cell-prop");
        rightAlign.classList.remove("active-cell-prop");
    }else {
        propertyEle.classList.add("active-cell-prop")
        leftAlign.classList.remove("active-cell-prop");
        centerAlign.classList.remove("active-cell-prop");
    }
}

function checkForFontStyle(fontElement, cellProp, propertyName) {
    fontElement.value = cellProp[propertyName]
}

const firstCell = document.querySelector(".cell");
firstCell.click();
firstCell.focus();


