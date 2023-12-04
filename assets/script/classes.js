'use strict';

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

    getInfo() {
        return `Shape: &nbsp;&nbsp;${this._name} <br> Color: &nbsp;&nbsp;${this._color}`;
    }
}

export { Shape }