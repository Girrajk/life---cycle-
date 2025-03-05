import React, { Component } from 'react'

export default class Mounting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Anshul",
        }
        console.log("Constructor called");


    }
    componentDidMount(){
        console.log("component Method");
        
    }

    static getDerivedStateFormProps(props,state){
        console.log("getDerivedStateFormProps called");
        return null;
        
    }
    render() {
        console.log("Component Rendred");
        
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
