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


const shapes = [];

function createShape() {
    const shapeDiv = document.createElement('div');
    let shapeValue = shapeSelect.value;
    let colorValue = colorSelect.value;

    const newShape = new Shape (shapeValue, colorValue);

    shapes.push(newShape);

    shapeDiv.className = `shape ${shapeValue} ${colorValue}`;

    shapeOutput.appendChild(shapeDiv);
}

onEvent(createBtn, 'click', createShape)
