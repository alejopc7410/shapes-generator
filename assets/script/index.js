'use strict';

/*------------- Utility Functions ----------*/

function select (selector) {
    return document.querySelector(selector);
};

function selectAll (selector) {
    return document.querySelectorAll(selector);
};  

function onEvent (selector, event, callback) {
    return selector.addEventListener(event, callback);
};

/*------------------------------------------*/

import { Shape } from './classes.js'

const shapeSelect = select('.shape-selector');
const colorSelect = select('.color-selector');
const createBtn = select('.create-button');
const shapeOutput = select('.output-shapes');
const shapesInfo = selectAll('[data-dynamic="true"]');
const advice = select('.flexbox p');

const shapes = [];

function selectValidation() {
    if (shapeSelect.value === "" || colorSelect.value === "") {
        return false;
    } else {
        return true;
    }
}
console.log(selectValidation())
function createShape() {
    if (!selectValidation()) return false;

    const shapeDiv = document.createElement('div');
    let shapeValue = shapeSelect.value;
    let colorValue = colorSelect.value;
    

    if (shapes.length < 45) {
        const newShape = new Shape (shapeValue, colorValue);
        shapes.push(newShape);
        shapeDiv.className = `shape ${shapeValue} ${colorValue}`;
        shapeOutput.appendChild(shapeDiv); 
        shapeDiv.addEventListener('click', () => advice.textContent = `${newShape.getInfo()}`);
    } else {
        advice.textContent = 'You have reached the maximum number of shapes!';
    }
   
}

onEvent(createBtn, 'click', createShape)