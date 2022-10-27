import Box from "./Box.js"

// child class from super constructor Box
export default class RedBox extends Box{
    constructor(width, height, x, y) {
        super("#A40E4C", width, height, x, y);
    }

    onMouseEnter() {
        this.el.style.backgroundColor = "orange";
    }
    onMouseEnter() {
        this.el.style.backgroundColor = "#A40E4C";
    }

}