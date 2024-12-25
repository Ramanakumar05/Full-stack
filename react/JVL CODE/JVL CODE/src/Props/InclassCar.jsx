import React from "react";

class InclassCar extends React.Component{
    render()
    {
        const {Carinfo}=this.props
        const {name,color}=Carinfo
        return(
            <>
                <h1>I am car class component</h1>
                <p>{`${name} ${color}`}</p>
                {/* {name} */}
            </>
        )
    }
}

export default InclassCar;