let locInputElem, locAdd, locArray, locConcat, locResult;
let arrayResult;

window.onload = init();

function init(){
    locInputElem = document.getElementById("input-Elem");
    locAdd = document.getElementById("add");
    locArray = document.getElementById("array");
    locMaxBtn = document.getElementById("maxBtn");
    locResult = document.getElementById("result");
    arrayResult = [];
}

function showArray(array){
    let result = "";
    result += "[";
    array.forEach(function(element){
        result += (array.indexOf(element) !== array.length - 1) ? element + ", " : element;
    });
    result += "]";
    locArray.innerHTML = result;
}

function add(newElem){
    arrayResult.push(newElem);
    locInputElem.value = "";
    showArray(arrayResult);
}

function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }

    locResult.innerHTML = "Diem thi cao nhat la: " + max;
}

locAdd.addEventListener("click", function(){
    add(parseFloat(locInputElem.value))
}, false);

locMaxBtn.addEventListener("click", function(){
    findMax(arrayResult);
}, false);

