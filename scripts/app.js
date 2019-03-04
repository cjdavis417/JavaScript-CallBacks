const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = 'red';
}

function makeBlue(element) {
    element.style.backgroundColor = 'blue';
}

function makeGreen(element) {
    element.style.backgroundColor = 'green';
}

function addStyleToElement(callback, element) {
    callback(element);
}

addStyleToElement(makeRed, div1);
addStyleToElement(makeBlue, div2);
addStyleToElement(makeGreen, div3);