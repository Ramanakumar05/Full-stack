import React from 'react'

class StateInClass extends React.Component{
    constructor()
    {
        super();
        this.state={color:"Red"}
    }
    render()
    {
        return(
            <>
                <h1>{`My Car color is ${this.state.color}`}</h1>
                <button onClick={()=>{
                    this.setState({color:"blue"})
                }}>Change</button>
            </>
            
        )
    }
}

export default StateInClass