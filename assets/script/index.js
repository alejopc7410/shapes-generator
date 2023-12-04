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
const advice = select('.flexbox p');
let shapeNumber = 0;

const shapes = [];

function selectValidation() {
    if (shapeSelect.value === "" || colorSelect.value === "") {
        return false;
    } else {
        return true;
    }
}

function createShape() {
    if (!selectValidation()) return false;

    const shapeDiv = document.createElement('div');
    let shapeValue = shapeSelect.value;
    let colorValue = colorSelect.value;
    
    shapeNumber++
    if (shapes.length < 45) {
        shapeDiv.setAttribute("data-number", shapeNumber);
        const number = shapeDiv.getAttribute("data-number");
        const newShape = new Shape (shapeValue, colorValue);
        shapes.push(newShape);
        shapeDiv.className = `shape ${shapeValue} ${colorValue}`;
        shapeOutput.appendChild(shapeDiv); 
        shapeDiv.addEventListener('click', () => advice.innerHTML = `${newShape.getInfo()} <br> Shape No.: &nbsp;&nbsp;${number}`);
    } else {
        advice.textContent = 'You have reached the maximum number of shapes!';
    }
   
}

onEvent(createBtn, 'click', createShape)