export default class Title {
    constructor(name) {
        this.name = name;
    }
    render() {
        const fontSize = "2em";
        return `<h3 style ="font-size:${fontSize}">Hello ${this.name}! </h3>`
    }
}