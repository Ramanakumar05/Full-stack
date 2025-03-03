import React, { Component } from 'react'

class class_color extends React.Component{
    constructor()
    {
        super();
        this.state={color:"red"}
    }
    render() {
        return (
        <div>
            <h1>{`Color is ${this.state.color}`}</h1>
            <button onClick={()=>
                {
                    this.setState({color:"blue"})
                }
            }>Change</button>
        </div>
        )
    }
}

export default class_color