// two ways to create components in React: function or class
import React from "react";
export default class Title extends React.Component{
    // have to pass through props
    constructor(props) {
        super(); // calling super when a class is inheritting(a child class) from another class(a super class)
        this.name = props.name;
    }
    
render() {
    // styling within .js, or create a css file
    const h1Styles = {
        fontSize: "2em",
        color: "lightblue",
    };

    return (
        <h1 style={h1Styles}>hello {this.name}!</h1>
        // css file way <h1 className="my-heading"> hello {this.name!}</h1>
    );
}
}