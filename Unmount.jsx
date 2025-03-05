import React, { Component } from 'react'

export default class Unmount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log("componentDidMount called");
        this.timer = setInterval(() => this.setState((prev) => ({count:prev.count + 1})),1000);

    }

    componentWillUnmount(){
        console.log("componentWillUnmount called");
        clearInterval(this.timer)
        
    }

    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
            </div>
        );
    }
}
