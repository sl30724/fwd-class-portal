export default class Box {
    constructor(color, width, height, x, y) {
        // element name on html, where the box goes
        // create any type of element you want
        this.el = document.createElement("div");
        this.el.style.backgroundColor = color;
        this.el.style.width = `${width}px`;
        this.el.style.height = `${height}px`;
        this.el.style.position = "absolute";
        this.el.style.position = "absolute";
        this.el.style.left = `${x}px`;
        this.el.style.top = `${y}px`;

        // bind this.onMouseEnter to this class because a callback(like event listener) would 
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.el.addEventListener("mouseenter", this.onMouseEnter);
        this.el.addEventListener("mouseleave", this.onMouseLeave);
    }

    onMouseEnter() {
        // this would not do anything because this is now referred to this in the callback
        // this.el.style.backgroundColor = "blue";
    }

        // could also bind it with arrow function, take up more space but naturally bind
    onMouseLeave = () => {
        // this.el.style.backgroundColor = "green";
    }

    getElement() {
        return this.el;
    }
}