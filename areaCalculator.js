function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const base= parseFloat(baseField.value);
    // console.log(base);

    const heightField = document.getElementById('triangle-height');
    const height= parseFloat(heightField.value);
    // console.log(height);
    const triangleArea = 0.5 * base * height;
    // console.log(triangleArea);
    const triangleAreaSpan=document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}


function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const width= parseFloat(widthField.value);
    // console.log(base);

    const lengthField = document.getElementById('rectangle-length');
    const length= parseFloat(lengthField.value);
    // console.log(height);
    const rectangleArea = width * length;
    // console.log(triangleArea);
    const rectangleAreaSpan=document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}

function calculateParallelogramArea(){
    const base = getInputField('parallelogram-base');
    const height = getInputField('parallelogram-height');
    const area = base * height;
    setArea('parallelogram-area', area);
}

function calculateRhombusArea(){
    const d1 = getInputField('rhombus-d1');
    const d2 = getInputField('rhombus-d2');
    const area= 0.5*d1*d2;
    setArea('rhombus-area', area);
}

function getInputField(fieldID){
    const inputField = document.getElementById(fieldID);
    const input= parseFloat(inputField.value);
    return input;
}

function setArea(fieldID, area){
    const areaSpan=document.getElementById(fieldID);
    areaSpan.innerText = area;
}