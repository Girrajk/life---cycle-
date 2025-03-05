import React, { Component } from 'react'

export default class Updating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Raj",

        };
        console.log("Constructor colled");


    }

    static getDerivedStateFormProps(props, state) {
        console.log("getDerivedStateFormProps called");
        return null

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        return true;

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate called");
        return null

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate called");

    }


    render() {
        console.log("Component Rendred");

        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({ name: "Simran" })}>Click</button>
            </div>
        )
    }


}
