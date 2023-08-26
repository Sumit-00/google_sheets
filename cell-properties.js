addStyling(bold, "fontWeight", "bold");
addStyling(italic, "fontStyle", "italic");
addStyling(underline, "textDecoration", "underline");
addTextAlignmentStyling(leftAlign, "textAlign", "alignment", "left");
addTextAlignmentStyling(centerAlign, "textAlign", "alignment", "center");
addTextAlignmentStyling(rightAlign, "textAlign", "alignment", "right");
addfontStyling(fontFamily, "fontFamily");
addfontStyling(fontSize, "fontSize");
addfontStyling(fontColor, "color");
addfontStyling(bgColor, "backgroundColor");

function addStyling(element, propertyName, style) {
    element.addEventListener("click", () => {
        const [cell, cellProp] = getCellProp();
        cellProp[style] = !cellProp[style];

        cell.style[propertyName] = cellProp[style] ? style : "normal";
        if(cellProp[style]){
            element.classList.add("active-cell-prop")
        }else if(element.classList.contains("active-cell-prop") && !cellProp[propertyName]){
            element.classList.remove("active-cell-prop")
        }
    })
}

function addTextAlignmentStyling(element, propertyKey, style, propertyValue) {

    element.addEventListener("click", () => {
        const [cell, cellProp] = getCellProp();
        cellProp[style] = propertyValue;

        cell.style[propertyKey] = cellProp[style]
        if(cellProp[style] === "left") {
            element.classList.add("active-cell-prop")
            centerAlign.classList.remove("active-cell-prop");
            rightAlign.classList.remove("active-cell-prop");
        }else if(cellProp[style] === "center") {
            element.classList.add("active-cell-prop")
            leftAlign.classList.remove("active-cell-prop");
            rightAlign.classList.remove("active-cell-prop");
        }else {
            element.classList.add("active-cell-prop")
            leftAlign.classList.remove("active-cell-prop");
            centerAlign.classList.remove("active-cell-prop");
        }
    })
    
}

function addfontStyling(element, propertyName) {
    element.addEventListener("change", (e) => {
        const fontName = e.target.value
        const [cell, cellProp] = getCellProp();
        cellProp[propertyName] = fontName;
        cell.style[propertyName] = cellProp[propertyName];
    })

}

function getCellProp() {
    const addressBarValue = addressBar.value;
    const [cell, cellProp] = activeCell(addressBarValue)
    return [cell, cellProp]
}


function activeCell(address) {
    const [rowId, colId] = decodeRIDCIDFromAddress(address);
    const cell = document.querySelector(`.cell[rid="${rowId}"][cid="${colId}"]`);
    const cellProp = sheetDB[rowId][colId];
    return [cell, cellProp];
}

function decodeRIDCIDFromAddress(address) {
    const rowId = +(address.charAt(1)) - 1;
    const colId = +(address.charCodeAt(0)) - 65;
    
    return [rowId, colId];
}


