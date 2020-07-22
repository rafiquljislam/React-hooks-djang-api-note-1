import React, { Component } from 'react'

export default class Hooks1_useState extends Component {
    state ={
        num : 0,
    }
    upNumber = e =>{
        e.preventDefault();
        const nume = this.state.num
        this.setState({num : nume+1})
    }
    downNumber = e =>{
        e.preventDefault();
        const nume = this.state.num
        this.setState({num : nume-1})

    }
    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.upNumber} >up</button>
                <button onClick={this.downNumber} >Down</button>
            </div>
        )
    }
}
